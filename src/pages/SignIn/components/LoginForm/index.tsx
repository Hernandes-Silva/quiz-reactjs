// @flow 
import * as React from 'react';
import ButtonOpacity from '../../../../components/ButtonOpacity';
import SignInput from '../../../../components/SignInput';
import { Error } from '../../styles'
import lock from '../../../../assets/lock.svg'
import email from '../../../../assets/email.svg'
import { useAuthContext } from '../../../../contexts/authProvider';
import { InputArea } from '../../../../styles/styleds';
import { SubmitHandler, useForm } from 'react-hook-form';
import { PropsDoSignIn } from '../../../../services/axios/modules/authentication/types';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup"

const schema = yup.object({
    username: yup.string().min(6).required(),
    password: yup.string().min(6).required(),
}).required();

export const LoginForm: React.FC = () => {
    
    const [error, setError] = React.useState<string>("");
    const { handleSignIn } = useAuthContext();
    const {register, handleSubmit, formState: {errors} } = useForm<PropsDoSignIn>({
        resolver: yupResolver(schema)
      });

    const login: SubmitHandler<PropsDoSignIn> = async (data) => {
        
        setError('')
        if (!data.username || !data.password) {
            setError('Username or password cannot be empty')
            return
        }
        
        const e = await handleSignIn(data)

        if (!e) return

        setError(e);
    }

    return (
        <InputArea>
            {error &&
                <Error>
                    {error}
                </Error>
            }
            
            <form onSubmit={handleSubmit(login)}>
                <SignInput
                    icon={email}
                    error={errors.username}
                    placeholder="Username"
                    {...register("username")}
                />

                <SignInput
                    icon={lock}
                    type="password"
                    error={errors.password}
                    placeholder="Digite sua senha"
                    {...register("password")}
                    
                />

                <ButtonOpacity type='submit' >
                    LOGIN
                </ButtonOpacity>
            </form>
        </InputArea>
    );
};