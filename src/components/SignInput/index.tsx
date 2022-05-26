// @flow 
import * as React from 'react';
import * as S from './styles';
type Props = {
    icon?: string;
    type?:string;
    placeholder?:string;
    value?:string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const SignInput: React.FC<Props> = ({ icon, ...inputProps }) => {
    
    return (
        <S.InputArea >
            {icon && <S.Icon src={icon}  />}
            <S.Input {...inputProps} />
        </S.InputArea>
    );
};
export default SignInput;