// @flow 
import { yupResolver } from '@hookform/resolvers/yup';
import { FC, useEffect, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import ButtonOpacity from '../../components/ButtonOpacity';
import { ItemChoice } from '../../components/ItemChoice';
import { finishQuiz, questionsCategory } from '../../services/Api';
import { ContainerBodyGlobal, ErrorStyleds, TextSecondary, TitleGlobal } from '../../styles/styleds';
import { Container, ContainerQuiz } from './styles';
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

type Props = {
    category_id: number
};
export type PropsQuestion = {
    question_id: number;
    user_answer: string;
}

export const Quiz: FC = () => {
    const { category_id } = useParams();
    const [questions, setQuestions] = useState([])
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
            setQuestions(data)
        }
        myRequest();
    }, [category_id])

    const handleChecked = async (data: PropsQuestion) => {
        const afterQuestions = getValues("questions") || [];
        for (var i = 0; i < afterQuestions.length; i++) {
            if (afterQuestions[i].question_id === data.question_id) {
                setValue(`questions.${i}`, data)
                return
            }
        }
        setValue("questions", [data, ...afterQuestions])
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
        <Container>
            <ContainerBodyGlobal>

                {!finished && <ContainerQuiz>

                    {questions.length ? questions.map((question: any) => {
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

                    {questions.length && <ButtonOpacity onClick={handleSubmit(finish)}>Finish</ButtonOpacity>}
                    {!questions.length && <ButtonOpacity onClick={() => navigate(paths.HOME)}>Home</ButtonOpacity>}
                </ContainerQuiz>
                }

                {finished && <ContainerQuiz>
                    <TitleGlobal>Quiz finished</TitleGlobal>
                    <TextSecondary>Score: {score}</TextSecondary>
                    <TextSecondary>Ranking Global: {rank}</TextSecondary>
                    <ButtonOpacity onClick={() => navigate(paths.HOME)}>Home</ButtonOpacity>
                </ContainerQuiz>}

            </ContainerBodyGlobal>
        </Container>
    );
};

export default Quiz;