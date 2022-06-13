import styled from "styled-components";
import { createTheme } from 'react-data-table-component';
import { primaryColor, secondaryColor, secondaryWhiteColor, whiteColor } from "../../styles/variables";

export const TitleStyled = styled.h1`
    text-align:center;
`
export const Container = styled.div`
    display:flex;
    
    background:linear-gradient(#043f57,transparent);
    background-color:#05668D;
    flex-direction:row;
    display:flex;
    flex:1;
    padding-left:10px;
    padding-right:10px;
`

export const ContainerRanking = styled.div`
    padding-top:30px;
    padding-bottom:10px;
    margin-top:50px;
    margin-bottom:50px;
    padding-left:50px;
    padding-right:50px;
    border-radius:10px;
    margin-left:20px;
    margin-right:10px;
    background:linear-gradient(${secondaryWhiteColor},transparent);
    background-color:${whiteColor};
    flex:1;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`
export const ContainerCategories = styled.div`
    background:linear-gradient(${secondaryWhiteColor},transparent);
    background-color:${whiteColor};
    padding-top:30px;
    padding-bottom:10px;
    margin-top:50px;
    margin-bottom:50px;
    padding-left:20px;
    padding-right:20px;
    border-radius:10px;
    
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

export const Title = styled.p`
    color:#054056;
    font-size:30px;
    font-weight:bold;
    text-align:center;
`
export const CategoryText = styled.p`
    margin-top:2vh;
    margin-bottom:2vh;
    color:#054056;
    font-size:25px;
    font-weight:bold;
`
export const ContainerDataTable = styled.div`
    .rdt_TableCol {
        font-weight:bold;
    };
`

interface LogoSrc {
    readonly src: string;
}
createTheme('solarized', {
    text: {
        primary: secondaryColor,
        secondary: primaryColor,
    },
    background: {
        default: whiteColor,
    },
    context: {
        background: '#cb4b16',
        text: '#FFFFFF',
    },
    divider: {
        default: '#073642',
    },
    action: {
        button: 'rgba(0,0,0,.54)',
        hover: 'rgba(0,0,0,.08)',
        disabled: 'rgba(0,0,0,.12)',
    },
}, 'dark');
