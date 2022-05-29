// @flow 
import * as React from 'react';
import * as S from './styles';

import { useNavigate } from 'react-router-dom'
import SignInput from '../../components/SignInput';
import ButtonOpacity from '../../components/ButtonOpacity';
import lock from '../../assets/lock.svg'
import email from '../../assets/email.svg'
import { doSignIn } from '../../services/axios/modules/authentication/repository';
import Cookies from 'js-cookie'
import getRequestErrorMessage from '../../utils/getRequestErrorMessage';
type Props = {

};


const Login: React.FC = (props: Props) => {
    const [emailField, setEmailField] = React.useState<string>("");
    const [passwordField, setPasswordield] = React.useState<string>("");
    const navigate = useNavigate();

    const handleSignIn = async () => {
        const payload = {
            username: emailField,
            password: passwordField
        }
        
        try {
            const { data } = await doSignIn(payload)
            Cookies.set("token", data.access)
            Cookies.set("refresh", data.refresh_access)
            navigate("/")
        } catch (err) {
            const message =  getRequestErrorMessage(err);
            alert(message)
        }


    }
    return (
        <S.Container>
            <S.LogoDiv />

            <S.InputArea>
                <SignInput
                    icon={email}
                    placeholder="Digite seu email"
                    value={emailField}
                    onChange={e => setEmailField(e.target.value)}
                />

                <SignInput
                    icon={lock}
                    type="password"
                    placeholder="Digite sua senha"
                    value={passwordField}
                    onChange={e => setPasswordield(e.target.value)}
                />

                <ButtonOpacity onClick={handleSignIn} >
                    LOGIN
                </ButtonOpacity>
            </S.InputArea>

            <S.TextFotter>
                Ainda não tem uma conta? <span>Cadastre-se</span>
            </S.TextFotter>
        </S.Container>


    );
};

export default Login;