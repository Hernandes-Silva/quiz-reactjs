// @flow 
import * as React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Home from '../pages/Home'
import SignIn  from '../pages/SignIn'
import SignUp from '../pages/SignUp';
import paths from './paths';
type Props = {
    
}
const AppRouter = (props: Props) => {
    return (
        <Routes>
            <Route path={paths.SIGNIN} element={<SignIn/>} />
            <Route path={paths.SIGNUP} element={<SignUp/>} />
            <Route path={paths.HOME} element={<Home/>} />
            
        </Routes>
        
    );
};

export default AppRouter;