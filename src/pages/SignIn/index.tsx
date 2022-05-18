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

            <S.InputArea>
                <SignInput />
            </S.InputArea>
        </S.Container>
     
        
    );
};

export default Login;