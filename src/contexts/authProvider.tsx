import Cookies from "js-cookie";
import { createContext, FC, useContext } from "react";
import { useNavigate } from "react-router-dom";
import paths from "../routes/paths";
import { doSignIn } from "../services/axios/modules/authentication/repository";
import { PropsDoSignIn } from "../services/axios/modules/authentication/types";
import getRequestErrorMessage from "../utils/getRequestErrorMessage";


interface InterfaceAuthContext {
    
    isLogged: boolean
    handleSignOut: () => void
    /* handleSignUp: (userData: PropsDoSignUp) => Promise<void> */
    handleSignIn: (userData: PropsDoSignIn) => Promise<string>
}

export const AuthContext = createContext<InterfaceAuthContext>({} as InterfaceAuthContext)

export const useAuthContext = () => useContext(AuthContext)

const handleSignOut = () => {
    Cookies.remove(`token`)
    Cookies.remove(`refresh`)
    window.location.pathname = paths.SIGNIN
}

type Props = {
    children: React.ReactNode;
};

const AuthProvider: FC <Props>=({children}) =>{
    const navigate = useNavigate();
    const isLogged = true;

    const handleSignIn = async (userData: PropsDoSignIn) => {
        try {
            const { data } = await doSignIn(userData)
            Cookies.set("token", data.access)
            Cookies.set("refresh", data.refresh_access)
            navigate("/")
            return "success"
        } catch (err) {
            const message =  getRequestErrorMessage(err);
            return message;
        }

    }
    return (
        <AuthContext.Provider 
            value={{
                handleSignIn,
                handleSignOut,
                isLogged
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;
