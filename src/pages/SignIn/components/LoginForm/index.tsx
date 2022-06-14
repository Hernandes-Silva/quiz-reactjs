// @flow 
import {FC, useEffect, useState }from 'react';
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
import { useLocation, useNavigate } from 'react-router-dom';
import paths from '../../../../routes/paths';

const schema = yup.object({
    username: yup.string().min(6).required(),
    password: yup.string().min(6).required(),
}).required();
type LocationProps = {
    state: {
      from: Location;
    };
};
export const LoginForm: FC = () => {
    
    const [error, setError] = useState<string>("");
    const { handleSignIn, validateAuth, isLogged } = useAuthContext();

    const navigate = useNavigate()
    const location = useLocation() as unknown as LocationProps;
    const from = location.state?.from.pathname || paths.HOME;
    const {register, handleSubmit, formState: {errors} } = useForm<PropsDoSignIn>({
        resolver: yupResolver(schema)
    });

    useEffect(() => {
        const verifyLogin = async() =>{
            if(isLogged){
               const logged = await validateAuth();
               if(logged) navigate(from)
            }
        }
        verifyLogin()
    }, [])

    const login: SubmitHandler<PropsDoSignIn> = async (data) => {
        
        setError('')
        if (!data.username || !data.password) {
            setError('Username or password cannot be empty')
            return
        }
        
        const message = await handleSignIn(data)

        if (message === "success"){
            navigate(from)
            return
        } 

        setError(message);
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