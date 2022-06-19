// @flow 
import { yupResolver } from '@hookform/resolvers/yup';
import { FC, useEffect, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import ButtonOpacity from '../../components/ButtonOpacity';
import { ItemChoice } from '../../components/ItemChoice';
import { finishQuiz, questionsCategory } from '../../services/Api';
import { ContainerBodyGlobal, ErrorStyleds, TextSecondary, TitleGlobal } from '../../styles/styleds';
import { QuizContainer, BodyQuiz } from './styles';
import * as yup from "yup"
import { PostFinishQuiz } from '../../services/axios/modules/posts/types';
import getRequestErrorMessage from '../../utils/getRequestErrorMessage';
import paths from '../../routes/paths';

const schema = yup.object({
    questions: yup.array()
        .of(
            yup.object({
                question_id: yup.number().integer(),
                user_answer: yup.string(),
            })
        ).min(10, "you need to answer all the questions").required()
})

export type PropsQuestion = {
    question_id: number;
    user_answer: string;
}

export const Quiz: FC = () => {
    const { category_id } = useParams();
    const [questionsResponse, setQuestionsResponse] = useState([])
    const [finished, setFinished] = useState(false)
    const [score, setScore] = useState(false)
    const [rank, setRank] = useState(false)
    const navigate = useNavigate()
    const { setValue, control, handleSubmit, getValues, formState: { errors } } = useForm<PostFinishQuiz>(
        {
            resolver: yupResolver(schema)
        }
    )

    useEffect(() => {
        const myRequest = async () => {
            const { data } = await questionsCategory(category_id);
            setQuestionsResponse(data)
        }
        myRequest();
    }, [category_id])

    const handleChecked = async (newQuestionChecked: PropsQuestion) => {
        const questionsChecked = getValues("questions") || [];

        const FalseOrIndexQuestion = isQuestionAlreadyChecked(questionsChecked, newQuestionChecked)

        if(FalseOrIndexQuestion !== false) {
            setValue(`questions.${FalseOrIndexQuestion}`, newQuestionChecked)
            return
        }
        
        setValue("questions", [newQuestionChecked, ...questionsChecked])
    }
    
    const isQuestionAlreadyChecked = (questionsChecked: any, newQuestion: PropsQuestion) =>{
        for (var i = 0; i < questionsChecked.length; i++) {
            if (newQuestion.question_id === questionsChecked[i].question_id ) {
                return i
            }
        }
        return false
    }

    const finish = async (data: PostFinishQuiz) => {
        data.category = category_id;
        try {
            const response = await finishQuiz(data);
            setScore(response.data.score)
            setRank(response.data.ranking)
            setFinished(true)
        } catch (e) {
            const message = getRequestErrorMessage(e)
            alert(message);
        }
    }

    return (
        <QuizContainer>
            <ContainerBodyGlobal>

                {!finished && <BodyQuiz>

                    {questionsResponse.length ? questionsResponse.map((question: any) => {
                        return <ItemChoice
                            onChange={(data: PropsQuestion) => handleChecked(data)}
                            key={question.id}
                            question={question}
                        />
                    }) : <TextSecondary>category is empty</TextSecondary>}
                    <ErrorStyleds>
                        {/* @ts-ignore */}
                        {errors.questions?.message}
                    </ErrorStyleds>

                    {questionsResponse.length && <ButtonOpacity onClick={handleSubmit(finish)}>Finish</ButtonOpacity>}
                    {!questionsResponse.length && <ButtonOpacity onClick={() => navigate(paths.HOME)}>Home</ButtonOpacity>}
                </BodyQuiz>
                }

                {finished && <BodyQuiz>
                    <TitleGlobal>Quiz finished</TitleGlobal>
                    <TextSecondary>Score: {score}</TextSecondary>
                    <TextSecondary>Ranking Global: {rank}</TextSecondary>
                    <ButtonOpacity onClick={() => navigate(paths.HOME)}>Home</ButtonOpacity>
                </BodyQuiz>}

            </ContainerBodyGlobal>
        </QuizContainer>
    );
};

export default Quiz;