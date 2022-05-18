// @flow 
import * as React from 'react';
import * as S from './styles';
import GlobalStyled from '../../styles/global'
import SignInput from '../../components/SignInput';

type Props = {
    
};

const Login: React.FC = (props: Props) => {
    
    return (
        <S.Container>
            <GlobalStyled/>

            <S.LogoDiv />
            <h1>LOGIN</h1>
            <S.InputArea>
                <SignInput />

                <SignInput />
                <S.CustomButtom>
                    LOGIN
                </S.CustomButtom>
            </S.InputArea>
        </S.Container>
     
        
    );
};

export default Login;