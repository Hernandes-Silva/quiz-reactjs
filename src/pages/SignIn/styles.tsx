import styled from 'styled-components';
import logo from '../../assets/logo.gif';

interface LogoSrc {
    readonly src: string;
}
export const Container = styled.div`
    display:flex;
    flex-direction:column;
    background-color: #05668D;
    height:100vh;
    justify-content:center;
    align-items:center;
`;

export const LogoDiv = styled.img.attrs<LogoSrc>({
  src: `${logo}`
})`
   height:25%;
`;

export const InputArea = styled.div`
  width:40%;
  margin-top: 2px;
`

  

