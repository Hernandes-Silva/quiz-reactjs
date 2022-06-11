import styled from "styled-components";


export const ContainerGlobal = styled.div`
    display:flex;
    flex-direction:column;
    height:100vh;
    background:linear-gradient(#043f57,transparent);
    background-color:#05668D;
    justify-content:center;
    align-items:center;
`;

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