import styled from "styled-components"

interface PropsButton  {
    backgroundColor?: string
}
export const CustomButtom =  styled.button<PropsButton>`
  height:50px;
  width:100%;
  border:0;
  border-radius:30px;
  text-align:center;
  color:#EBF2FA;
  background-color:${props => props.backgroundColor? props.backgroundColor : '#054056'};
  margin-top:15px;
  cursor:pointer;
  font-weight:bold;
`