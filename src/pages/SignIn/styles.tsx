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
   max-width:70%;
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
export const TextFotter = styled.p`
  margin-top:5vh;
  text-align:center;
  span {
    cursor: pointer;
    font-weight:bold;
  }
`
