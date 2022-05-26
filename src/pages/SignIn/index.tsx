// @flow 
import * as React from 'react';
import * as S from './styles';

import SignInput from '../../components/SignInput';
import ButtonOpacity from '../../components/ButtonOpacity';
import lock from '../../assets/lock.svg'
import email from '../../assets/email.svg'
type Props = {
    
};

const Login: React.FC = (props: Props) => {
    const [emailField, setEmailField ] = React.useState<string>("Hernandes@gmail.com");
    const [passwordField, setPasswordield ] = React.useState<string>();

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
               
                <ButtonOpacity >
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