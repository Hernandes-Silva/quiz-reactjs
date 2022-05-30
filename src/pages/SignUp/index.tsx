// @flow 
import * as React from 'react';
import { Container } from '../../styles/styleds';
import { SignUpForm } from './components/SignUpForm';
import { Title } from './styles';
type Props = {
    
};
export const SignUp: React.FC =  (props: Props) => {
    return (
        <Container>
            <Title>SIGN UP</Title>
            <SignUpForm />

        </Container>
    );
};
export default SignUp;