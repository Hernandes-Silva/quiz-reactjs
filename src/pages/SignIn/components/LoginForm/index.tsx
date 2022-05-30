// @flow 
import * as React from 'react';
import ButtonOpacity from '../../../../components/ButtonOpacity';
import SignInput from '../../../../components/SignInput';
import * as S from '../../styles'
import lock from '../../../../assets/lock.svg'
import email from '../../../../assets/email.svg'
import { useAuthContext } from '../../../../contexts/authProvider';

type Props = {

};
export const LoginForm: React.FC = (props: Props) => {
    const [usernameField, setUsernameField] = React.useState<string>("");
    const [passwordField, setPasswordield] = React.useState<string>("");
    const [error, setError] = React.useState<string>("");
    const { handleSignIn } = useAuthContext();

    const login = async () => {
        setError('')
        if(!usernameField || !passwordField){
            setError('Username or password cannot be empty')
            return
        }
        const e = await handleSignIn({username: usernameField, password:passwordField})
        
        if(!e) return
        
        setError(e);
    }

    return (
        <S.InputArea>

            {error &&
            <S.Error>
                {error}
            </S.Error>
            }
            <SignInput
                icon={email}
                placeholder="Digite seu email"
                value={usernameField}
                onChange={e => setUsernameField(e.target.value)}
            />

            <SignInput
                icon={lock}
                type="password"
                placeholder="Digite sua senha"
                value={passwordField}
                onChange={e => setPasswordield(e.target.value)}
            />

            <ButtonOpacity onClick={login} >
                LOGIN
            </ButtonOpacity>
        </S.InputArea>
    );
};