// @flow 
import * as React from 'react';
import { ContainerGlobal } from '../../styles/styleds';
import { SignUpForm } from './components/SignUpForm';
import { Title } from './styles';

export const SignUp: React.FC =  () => {
    return (
        <ContainerGlobal>
            <Title>SIGN UP</Title>
            <SignUpForm />

        </ContainerGlobal>
    );
};
export default SignUp;