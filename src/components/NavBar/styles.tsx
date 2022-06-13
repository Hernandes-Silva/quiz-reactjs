import styled from "styled-components";
import { primaryColor, secondaryColor, secondaryWhiteColor, whiteColor } from "../../styles/variables";

export const Container = styled.div`
    display:flex;
    justify-content:space-between;
    padding:10px;
    background-color:#012836;
    color:${whiteColor};
    letter-spacing:2px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    h1 {
        cursor: pointer;
    }
`
export const  ContainerLinks = styled.div`
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    a { 
        cursor: pointer;
        margin-left:8px;
        margin-right:8px;
        letter-spacing:2px;
        font-size:large;
        font-weight:bold;
        text-decoration:none;
        color:${secondaryWhiteColor};
    }
`