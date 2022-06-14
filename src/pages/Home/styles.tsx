import styled from "styled-components";
import { createTheme } from 'react-data-table-component';
import { backgroundLightColor, primaryColor, secondaryColor, secondaryWhiteColor, whiteColor } from "../../styles/variables";

export const TitleStyled = styled.h1`
    text-align:center;
`
export const Container = styled.div`
    display:flex;
    flex-direction:row;
    padding-right:10px;
    flex:1;
`

export const ContainerRanking = styled.div`
    padding-top:30px;
    padding-bottom:10px;
    padding-left:2vw;
    padding-right:2vw;
    border-radius:5px;
    margin-left:2vw;
    margin-right:2vw;
    min-width:50vw;
    flex:1;
    
`
export const ContainerCategories = styled.div`
    padding-top:30px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    padding-bottom:10px;
    padding-left:20px;
    padding-right:20px;
`

export const Title = styled.p`
    color:${whiteColor};
    font-size:5vw;
    font-weight:bold;
    text-align:center;
    @media (min-width: 768px) {
        font-size:3vw;
    }

    @media (min-width: 1024px) {
        font-size:2vw;
    }

`
export const CategoryText = styled.p`
    margin-top:1rem;
    margin-bottom:1rem;
    a {
        text-decoration:none;
        color:${whiteColor};
        font-size:4vw;
        font-weight:bold;

        @media (min-width: 768px) {
        font-size:2vw;
        }

        @media (min-width: 1024px) {
        font-size:1.5vw;
        }
    }
`
export const ContainerDataTable = styled.div`
    .rdt_TableCol {
        font-weight:bold;
    };
    margin-top:1vh;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

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
