// @flow 
import { FC, useState } from 'react';
import { Title } from '../../pages/Home/styles';
import { PropsQuestion } from '../../pages/Quiz';
import { TextSecondary } from '../../styles/styleds';
import { Container, ContainerButton, ContainerText } from './styles';
type Props = {
    question: {
        id: number
        title: string
        text: string
        a: string
        b: string
        c: string
        answer: string
    }
    onChange: (data: PropsQuestion) => void;
};
export const ItemChoice: FC<Props> = (props) => {
    const [checkedA, setCheckedA] = useState(false)
    const [checkedB, setCheckedB] = useState(false)
    const [checkedC, setCheckedC] = useState(false)
    const handleCheckedA = ()=>{
        setCheckedA(true)
        setCheckedB(false)
        setCheckedC(false)
        handleCheck("a")
    }
    const handleCheckedB = ()=>{
        
        setCheckedA(false)
        setCheckedB(true)
        setCheckedC(false)
        handleCheck("b")
    }
    const handleCheckedC = () =>{
        setCheckedA(false)
        setCheckedB(false)
        setCheckedC(true)
        handleCheck("c")
    }
    const handleCheck = (value:string) =>{
        const data = {
            question_id: props.question.id,
            user_answer: value
        }
        props.onChange(data)
    }
    return (
        <Container>
            <Title>{props.question.title}</Title>
            <TextSecondary>{props.question.text}</TextSecondary>
            <ContainerButton>
                <input
                    type="checkbox"
                    checked={checkedA}
                    onChange={() => handleCheckedA()}
                    id={`checkbox0${props.question.id}`} />
                <div>
                    <label htmlFor={`checkbox0${props.question.id}`}></label>
                </div>
                <ContainerText>
                    <TextSecondary>{props.question.a}</TextSecondary>
                </ContainerText>
            </ContainerButton>
            <ContainerButton>
                <input
                    type="checkbox"
                    checked={checkedB}
                    onChange={() => handleCheckedB()}
                    id={`checkbox1${props.question.id}`} />
                <div>
                    <label htmlFor={`checkbox1${props.question.id}`}></label>
                </div>
                <ContainerText>
                    <TextSecondary>{props.question.b}</TextSecondary>
                </ContainerText>
            </ContainerButton>
            <ContainerButton>
                <input
                    type="checkbox"
                    checked={checkedC}
                    onChange={() => handleCheckedC()}
                    id={`checkbox2${props.question.id}`} />
                <div>
                    <label htmlFor={`checkbox2${props.question.id}`}></label>
                </div>
                <ContainerText>
                    <TextSecondary>
                        {props.question.c}
                    </TextSecondary>
                </ContainerText>
            </ContainerButton>

        </Container>
    );
};