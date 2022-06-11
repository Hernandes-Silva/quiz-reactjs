// @flow 
import * as React from 'react';
import { ContainerGlobal } from '../../styles/styleds';
import { SignUpForm } from './components/SignUpForm';
import { Title } from './styles';
type Props = {
    
};
export const SignUp: React.FC =  (props: Props) => {
    return (
        <ContainerGlobal>
            <Title>SIGN UP</Title>
            <SignUpForm />

        </ContainerGlobal>
    );
};
export default SignUp;