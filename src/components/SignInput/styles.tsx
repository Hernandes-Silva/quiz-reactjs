import styled from "styled-components";

interface PropsIcon {
   readonly src: string;
}
export const InputArea = styled.div`
    width:100%;
    height:50px;
    background-color: #EBF2FA;
    border-radius:30px;
    padding-left:15px;
    padding-right:15px;
    display:flex;
    align-items:center;
    margin-top:15px;
`
export const Input = styled.input`
    flex:1;
    height:90%;
    border:0;
    
    background-color: transparent;
    &:focus{
        border:0;
        outline: none;
        box-shadow: 0;
    }
`

export const Icon = styled.img`
    height:35%;
    margin-right:5px;
`
export const ContainerError = styled.div`
    padding-left:15px;
    padding-right:15px;
`


