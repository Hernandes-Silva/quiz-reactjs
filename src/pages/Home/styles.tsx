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
export const Cei = styled.div`
    width:50%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`
export const ContainerCategories = styled.div`
    padding-top:10px;
    padding-bottom:10px;
    margin-top:50px;
    width:auto;
    padding-left:50px;
    padding-right:50px;
    border-radius:30px;
    background:linear-gradient(#c7e1ec,transparent);
    background-color:#EBF2FA;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 29px 0px;
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
    font-weight:bold
`

interface LogoSrc {
    readonly src: string;
}
/* export const Gif = styled.img.attrs<LogoSrc>({
    src: `${bingo}`
})`
    margin-top:60px;
    height:25%;
    max-width:70%;
  `; */