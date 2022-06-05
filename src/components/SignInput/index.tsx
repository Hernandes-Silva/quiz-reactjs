// @flow 
import * as React from 'react';
import { FieldError } from 'react-hook-form';
import { ErrorStyleds } from '../../styles/styleds';
import * as S from './styles';



type InputProps = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>;

type NewProps = InputProps & { icon: string, error?: FieldError | undefined };

const Input = React.forwardRef<HTMLInputElement, NewProps>((props, ref) => (
    <>
        <S.InputArea >
            {props.icon && <S.Icon src={props.icon} />}
            <S.Input ref={ref as any} {...props} />
        </S.InputArea>
        {props.error && <S.ContainerError>
            <ErrorStyleds>{props.error.message}</ErrorStyleds>
        </S.ContainerError>}
    </>


));

export default Input;


