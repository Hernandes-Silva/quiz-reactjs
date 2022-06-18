import { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthContext } from "../contexts/authProvider";
import paths from "../routes/paths";
import { getTokenAndRefreshToken } from "../utils/cookies/credentials";

const RequiredAuth = () => {
    const { isLogged } = useAuthContext();
    const  location  = useLocation();

    return (
        isLogged() ?
            <Outlet /> :
            <Navigate to={paths.SIGNIN} state={{ from: location }} replace />
    )
}
export default RequiredAuth