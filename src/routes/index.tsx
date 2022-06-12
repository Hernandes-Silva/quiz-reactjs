// @flow 
import * as React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Home from '../pages/Home'
import Quiz from '../pages/Quiz';
import SignIn  from '../pages/SignIn'
import SignUp from '../pages/SignUp';
import RequiredAuth from '../permissions/RequiredAuth';
import paths from './paths';
type Props = {
    
}
const AppRouter = (props: Props) => {
    return (
        <Routes>
            <Route path={paths.SIGNIN} element={<SignIn/>} />
            <Route path={paths.SIGNUP} element={<SignUp/>} />
            <Route element={<RequiredAuth />} >
                <Route path={paths.HOME} element={<Home/>} />
                <Route path={`${paths.QUIZ}:category_id/`} element={<Quiz/>} />
            </Route>
            
        </Routes>
        
    );
};

export default AppRouter;