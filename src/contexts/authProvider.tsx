import Cookies from "js-cookie";
import { createContext, FC, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import paths from "../routes/paths";
import { doSignIn, doSignUp, getAuthenticatedUser } from "../services/axios/modules/authentication/repository";
import { PropsDoSignIn, PropsDoSignUp } from "../services/axios/modules/authentication/types";
import { getTokenAndRefreshToken, setTokenAndRefreshToken } from "../utils/cookies/credentials";
import getRequestErrorMessage from "../utils/getRequestErrorMessage";
import { PropsUser } from "./types";


interface InterfaceAuthContext {
    currentUser: PropsUser | null
    isAdmin: () => boolean
    isLogged: () => boolean
    handleSignOut: () => void
    handleSignUp: (userData: PropsDoSignUp) => Promise<string>
    handleSignIn: (userData: PropsDoSignIn) => void
    validateAuth: () => void
}

export const AuthContext = createContext<InterfaceAuthContext>({} as InterfaceAuthContext)

export const useAuthContext = () => useContext(AuthContext)

export const handleSignOut = () => {
    Cookies.remove(`token`)
    Cookies.remove(`refresh`)
    window.location.pathname = paths.SIGNIN
}

type Props = {
    children: React.ReactNode;
};

const AuthProvider: FC<Props> = ({ children }) => {
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState<PropsUser | null>(null)

    useEffect(()=>{
        validateAuth();
    },[])

    const validateAuth = async () => {
        if (!isLogged()){
            setCurrentUser(null)
            return 
        }

        try {
            await fillCurrentUser()
        } catch (err) {
            handleSignOut();
        }
    }
    
    const isLogged = () =>{
        const credentials = getTokenAndRefreshToken();
        return credentials.token && credentials.refresh? true: false
    }

    const fillCurrentUser = async() => {
        const { data } = await getAuthenticatedUser();
        setCurrentUser(data)
    }

    const handleSignIn = async (userData: PropsDoSignIn) => {
            const { data } = await doSignIn(userData)
            setTokenAndRefreshToken(data)
            await fillCurrentUser()
    }

    const isAdmin = () =>{
        if(currentUser?.groups.some((e: any) => e.name === "admin_quiz"))
            return true
        return false
    }

    const handleSignUp = async (userData: PropsDoSignUp) => {
        try {
            await doSignUp(userData);
            navigate(paths.SIGNIN)
            alert("User created successfully")
            return "success"
        } catch (err) {
            const message = getRequestErrorMessage(err);
            return message;
        }
    }

    return (
        <AuthContext.Provider
            value={{
                currentUser,
                handleSignIn,
                handleSignUp,
                handleSignOut,
                validateAuth,
                isLogged,
                isAdmin,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;
