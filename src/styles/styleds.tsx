import styled from "styled-components";
import { primaryColor, secondaryColor, secondaryWhiteColor, whiteColor } from "./variables";


export const ContainerGlobal = styled.div`
    display:flex;
    flex-direction:column;
    height:100vh;
    background:linear-gradient(#043f57,transparent);
    background-color:${primaryColor};
    justify-content:center;
    align-items:center;
`;
export const ContainerBodyGlobal= styled.div`
  background:linear-gradient(${secondaryWhiteColor},transparent);
  background-color:${whiteColor};
  flex-direction:row;
  display:flex;
  flex:1;
  width:95%;
  padding-top:50px;
  padding-bottom:10px;
  margin-top:50px;
  margin-bottom:50px;
  padding-left:50px;
  padding-right:50px;
  border-radius:30px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  @media (min-width: 768px) {
    width:90%
  }

  @media (min-width: 1024px) {
    width:80%
  }
`
export const InputArea = styled.div`
  width:80%;
  margin-top: 2px;

  @media (min-width: 768px) {
    width:60%
  }

  @media (min-width: 1024px) {
    width:40%
  }
`
export const ErrorStyleds = styled.p`
  color: #DC1637;
  padding-top: 5px;
`
export const TextSecondary = styled.p`
  color:${secondaryColor};
`
export const ShadowLight = styled.div`
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`
