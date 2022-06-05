import styled from "styled-components";


export const Container = styled.div`
    display:flex;
    flex-direction:column;
    height:100vh;
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