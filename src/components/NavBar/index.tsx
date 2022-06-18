// @flow 
import * as React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { handleSignOut, useAuthContext } from '../../contexts/authProvider';
import paths from '../../routes/paths';
import { Container, ContainerLinks } from './styles';
type Props = {
    
};
export const NavBar = (props: Props) => {
    const navigate = useNavigate();
    const {isAdmin} = useAuthContext();
    return (
        <Container>
            <h1 onClick={() => navigate(paths.HOME)}>Quiz</h1>
            <ContainerLinks>
                {isAdmin() && <NavLink to={paths.ADMIN}>Admin</NavLink>}
                <NavLink to={paths.HOME}>Home </NavLink>
                <a onClick={() => handleSignOut()}>Logout</a>
            </ContainerLinks>
           
        </Container>
    );
};