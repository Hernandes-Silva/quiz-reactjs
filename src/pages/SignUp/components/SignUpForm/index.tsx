// @flow 
import {FC} from 'react';
import SignInput from '../../../../components/SignInput';
import lock from '../../../../assets/lock.svg'
import email from '../../../../assets/email.svg'
import { InputArea } from '../../../../styles/styleds';
import ButtonOpacity from '../../../../components/ButtonOpacity';
import { SubmitHandler, useForm } from 'react-hook-form';

type FormValues = {
    username: string;
    first_name: string;
    last_name: string;
    email:string;
    password: string;
    confirm_password: string;
    
};
export const SignUpForm: FC = () => {
    const { register, handleSubmit } = useForm<FormValues>()


    const signUp: SubmitHandler<FormValues> = async (data) => {
        console.log(data)
    }
    return (
        <InputArea>
            <form onSubmit={handleSubmit(signUp)}>
                <SignInput
                    icon={email}
                    placeholder="Username"
                    {...register("username")}

                />
                <SignInput
                    icon={email}
                    placeholder="Primeiro nome"
                    {...register("first_name")}

                />
                <SignInput
                    icon={email}
                    placeholder="Sobrenome"
                    {...register("last_name")}

                />
                <SignInput
                    icon={email}
                    placeholder="Email"
                    {...register("email")}

                />
                <SignInput
                    icon={lock}
                    type="password"
                    placeholder="Digite sua senha"
                    {...register("password")}

                />
                <SignInput
                    icon={lock}
                    type="password"
                    placeholder="Confirme sua senha"
                    {...register("confirm_password")}

                />
                <ButtonOpacity type='submit'>SIGN UP</ButtonOpacity>
            </form>
        </InputArea>
    );
};