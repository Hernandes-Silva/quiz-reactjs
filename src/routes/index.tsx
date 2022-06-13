// @flow 
import * as React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import styled from 'styled-components';
import { NavBar } from '../components/NavBar';
import { useAuthContext } from '../contexts/authProvider';
import Home from '../pages/Home'
import Quiz from '../pages/Quiz';
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp';
import RequiredAuth from '../permissions/RequiredAuth';
import paths from './paths';

const Container = styled.div`
    display:flex;
    min-height: 100vh;
    flex-direction:column;
`

const AppRouter = () => {
    const {isLogged} = useAuthContext()
    return (
        <Container>
            {isLogged && <NavBar />}
            <Routes>
                <Route path={paths.SIGNIN} element={<SignIn />} />
                <Route path={paths.SIGNUP} element={<SignUp />} />
                <Route element={<RequiredAuth />} >
                    <Route path={paths.HOME} element={<Home />} />
                    <Route path={`${paths.QUIZ}:category_id/`} element={<Quiz />} />
                </Route>

            </Routes>
        </Container>

    );
};


export default AppRouter;