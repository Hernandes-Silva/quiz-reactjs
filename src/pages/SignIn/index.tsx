// @flow 
import * as React from 'react';
import { LoginForm } from './components/LoginForm';
import * as S from './styles';

type Props = {

};


const Login: React.FC = (props: Props) => {
    

    return (
        <S.Container>
            <S.LogoDiv />

            <LoginForm />
           
            <S.TextFotter>
                Ainda não tem uma conta? <span>Cadastre-se</span>
            </S.TextFotter>
        </S.Container>


    );
};

export default Login;