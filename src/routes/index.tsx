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
import paths from './paths';
type Props = {
    
}
const AppRouter = (props: Props) => {
    return (
        <Router>
            <Routes>
                <Route path={paths.SIGNIN} element={<SignIn/>} />
                <Route path={paths.HOME} element={<Home/>} />
            </Routes>
        </Router>
    );
};

export default AppRouter;