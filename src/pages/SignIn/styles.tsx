import styled from 'styled-components';
import logo from '../../assets/logo.gif';
import { whiteColor } from '../../styles/variables';

interface LogoSrc {
  readonly src: string;
}


export const LogoDiv = styled.img.attrs<LogoSrc>({
  src: `${logo}`
})`
   height:25%;
   max-width:70%;
`;

export const TextFotter = styled.p`
  margin-top:5vh;
  text-align:center;
  span {
    cursor: pointer;
    font-weight:bold;
    margin-left:5px;
  }
`
export const ContainerError = styled.div`
    background-color:${whiteColor};
    opacity:0.3;
`
export const LeftError = styled
export const Error = styled.h4`
  padding:5px;
  text-align:center;
  border-radius:10px;
`
