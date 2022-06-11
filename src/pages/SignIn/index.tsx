// @flow 
import {FC, useContext }from 'react';
import { useNavigate } from 'react-router-dom';
import paths from '../../routes/paths';

import { ContainerGlobal } from '../../styles/styleds';
import { LoginForm } from './components/LoginForm';
import * as S from './styles';

const Login: FC = () => {
    const navigate = useNavigate()
    return (
        <ContainerGlobal>
            <S.LogoDiv />

            <LoginForm />
           
            <S.TextFotter>
                Ainda não tem uma conta? 
                <span onClick={() => navigate(paths.SIGNUP)}>
                 Cadastre-se
                </span>
            </S.TextFotter>
        </ContainerGlobal>


    );
};

export default Login;