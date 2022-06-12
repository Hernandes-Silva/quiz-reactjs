import styled from "styled-components";


export const TitleStyled = styled.h1`
    text-align:center;
`
export const Container = styled.div`
    display:flex;
    height:100vh;
    background:linear-gradient(#043f57,transparent);
    background-color:#05668D;
    align-items:center;
    flex-direction:column;
`

export const ContainerBody = styled.div`
    background:linear-gradient(#c7e1ec,transparent);
    background-color:#EBF2FA;
    flex-direction:row;
    display:flex;
    flex:1;
    width:85%;
    padding-top:50px;
    padding-bottom:10px;
    margin-top:50px;
    margin-bottom:50px;
    padding-left:50px;
    padding-right:50px;
    border-radius:30px;
`
export const ContainerRanking = styled.div`
    flex:3;
    margin-left:20px;
    margin-right:20px;
`
export const ContainerCategories = styled.div`
    flex:1;
`

export const Title = styled.p`
    color:#054056;
    font-size:30px;
    font-weight:bold;
`
export const CategoryText = styled.p`
    margin-top:2vh;
    margin-bottom:2vh;
    color:#054056;
    font-size:25px;
    font-weight:bold;
`

interface LogoSrc {
    readonly src: string;
}
