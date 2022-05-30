// @flow 
import * as React from 'react';
import * as S from './styles';



type InputProps = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>;

type NewProps = InputProps & { icon: string };

const Input = React.forwardRef<HTMLInputElement, NewProps>((props, ref) => (

    <S.InputArea >
        {props.icon && <S.Icon src={props.icon} />}
        <S.Input ref={ref as any} {...props} />
    </S.InputArea>

));

export default Input;


