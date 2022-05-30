// @flow 
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import paths from '../../routes/paths';
import { Container } from '../../styles/styleds';
import { LoginForm } from './components/LoginForm';
import * as S from './styles';

type Props = {

};

const Login: React.FC = (props: Props) => {
    const navigate = useNavigate()

    return (
        <Container>
            <S.LogoDiv />

            <LoginForm />
           
            <S.TextFotter>
                Ainda não tem uma conta? 
                <span onClick={() => navigate(paths.SIGNUP)}>
                 Cadastre-se
                </span>
            </S.TextFotter>
        </Container>


    );
};

export default Login;