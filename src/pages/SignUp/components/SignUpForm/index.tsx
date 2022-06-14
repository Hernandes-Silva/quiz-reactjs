// @flow 
import {FC} from 'react';
import SignInput from '../../../../components/SignInput';
import lock from '../../../../assets/lock.svg'
import email from '../../../../assets/email.svg'
import { InputArea } from '../../../../styles/styleds';
import ButtonOpacity from '../../../../components/ButtonOpacity';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuthContext } from '../../../../contexts/authProvider';
import { PropsDoSignUp } from '../../../../services/axios/modules/authentication/types';


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
    const {handleSignUp}= useAuthContext();


    const signUp: SubmitHandler<PropsDoSignUp> = async (data) => {
        await handleSignUp(data)
    }
    return (
        <InputArea>
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