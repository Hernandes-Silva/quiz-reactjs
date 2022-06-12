import styled from "styled-components";
import { secondaryColor, secondaryWhiteColor, whiteColor } from "../../styles/variables";

export const Container = styled.div`
    margin-top:10px;
    margin-bottom: 10px;
    width:100%;
    display:flex;
    
    flex-direction:column;
    align-items:center;
`
export const Title = styled.h1`
    color:${secondaryColor};
`

export const ContainerButton = styled.div`
    position:relative;
    background-color:#ffffff;
    border-radius:30px;
    width:100%;
    padding-top:10px;
    padding-bottom:10px;
    margin-top:20px;
    margin-bottom:20px;
    align-self:flex-start;
    display:flex;
    align-items:center;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    div label {
        background-color: #fff;
        border: 1px solid #ccc;
        border-radius: 50%;
        cursor: pointer;
        height: 28px;
        position:relative;
        display:flex;
        align-items:center;
        justify-content:center;
        margin-bottom:2px;
        width: 28px  !important;
    }

    div label:after {
        border: 2px solid #fff;
        border-top: none;
        border-right: none;
        content: "";
        height: 6px;
        opacity: 0;
        transform: rotate(-45deg);
        width: 12px;
    }

    input[type="checkbox"] {
    visibility: hidden;
    }

    input[type="checkbox"]:checked + div label {
        background-color: #66bb6a;
        border-color: #66bb6a;
    }

    input[type="checkbox"]:checked + div label:after {
        opacity: 1;
    }
`
export const ContainerText = styled.div`
    margin-left:10px;
    display:flex;
    justify-content:center;
    align-items:center;
`
