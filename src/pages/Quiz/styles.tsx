import styled from "styled-components";
import { backgroundLightColor, secondaryColor } from "../../styles/variables";

export const Container = styled.div`
    display:flex;
    background:linear-gradient(${secondaryColor},transparent);
    background-color:${backgroundLightColor};
    align-items:center;
    flex-direction:column;
`
export const ContainerQuiz = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    flex:1;
    margin-bottom:10px;

`