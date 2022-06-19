// @flow 
import {FC, useState} from 'react';
import SignInput from '../../../../components/SignInput';
import lock from '../../../../assets/lock.svg'
import email from '../../../../assets/email.svg'
import { ErrorLightGlobal, InputArea } from '../../../../styles/styleds';
import ButtonOpacity from '../../../../components/ButtonOpacity';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuthContext } from '../../../../contexts/authProvider';
import { PropsDoSignUp } from '../../../../services/axios/modules/authentication/types';
import { useNavigate } from 'react-router-dom';
import paths from '../../../../routes/paths';

const scheme = yup.object({
    username: yup.string().min(6).required(),
    first_name: yup.string().required(),
    last_name:yup.string().required(),
    email:yup.string().email().required(),
    password: yup.string().min(6).required(),
    confirm_password: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
})

export const SignUpForm: FC = () => {
    const { register, handleSubmit, formState: {errors} } = useForm<PropsDoSignUp>({
        resolver: yupResolver(scheme)
    })
    const [error, setError] = useState<string>("");
    const {handleSignUp}= useAuthContext();
    const navigate = useNavigate();

    const signUp: SubmitHandler<PropsDoSignUp> = async (data) => {
        try {
            await handleSignUp(data)
            navigate(paths.SIGNIN)
            alert("User created successfully")
        } catch (erro) {
            console.log(erro)
            const message = getErrorMessage(erro);
            setError(message)
        }
    }

    const getErrorMessage = (err: any): string  =>{
        const message =
            err.response?.data?.username ??
            err.response?.data?.detail ??
            err.message ??
            `An unexpected error has occurred, we are working to resolve it.`
            return message
    }

    return (
        <InputArea>
            {error &&
                <ErrorLightGlobal>
                    {error}
                </ErrorLightGlobal>
            }
            <form onSubmit={handleSubmit(signUp)}>
                <SignInput
                    icon={email}
                    error={errors.username}
                    placeholder="Username"
                    {...register("username")}

                />
                <SignInput
                    icon={email}
                    error={errors.first_name}
                    placeholder="Primeiro nome"
                    {...register("first_name")}

                />
                <SignInput
                    icon={email}
                    error={errors.last_name}
                    placeholder="Sobrenome"
                    {...register("last_name")}

                />
                <SignInput
                    icon={email}
                    error={errors.email}
                    placeholder="Email"
                    {...register("email")}

                />
                <SignInput
                    icon={lock}
                    error={errors.password}
                    type="password"
                    placeholder="Digite sua senha"
                    {...register("password")}

                />
                <SignInput
                    icon={lock}
                    error={errors.confirm_password}
                    type="password"
                    placeholder="Confirme sua senha"
                    {...register("confirm_password")}

                />
                <ButtonOpacity type='submit'>SIGN UP</ButtonOpacity>
            </form>
        </InputArea>
    );
};