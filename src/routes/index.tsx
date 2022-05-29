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
type Props = {
    
}
const AppRouter = (props: Props) => {
    return (
        <Router>
            <Routes>
                <Route path='/login' element={<SignIn/>} />
                <Route path='/' element={<Home/>} />
            </Routes>
        </Router>
    );
};

export default AppRouter;