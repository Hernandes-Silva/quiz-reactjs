import Cookies from "js-cookie";
import { createContext, FC, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import paths from "../routes/paths";
import { doSignIn, doSignUp, getUser } from "../services/axios/modules/authentication/repository";
import { PropsDoSignIn, PropsDoSignUp } from "../services/axios/modules/authentication/types";
import { getCredentials, setCrendentials } from "../utils/cookies/credentials";
import getRequestErrorMessage from "../utils/getRequestErrorMessage";
import { PropsUser } from "./types";


interface InterfaceAuthContext {
    user: PropsUser | null
    isAdmin: boolean
    isLogged: boolean
    handleSignOut: () => void
    handleSignUp: (userData: PropsDoSignUp) => Promise<string>
    handleSignIn: (userData: PropsDoSignIn) => Promise<string>
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

const AuthProvider: FC <Props>=({children}) =>{
    const navigate = useNavigate();
    const [isLogged, setIsLogged] = useState(false)
    const [user, setUser] = useState(null)
    const [isAdmin,setIsAdmin] = useState(false)

    const handleSignIn = async (userData: PropsDoSignIn) => {
        try {
            const { data } = await doSignIn(userData)
            setCrendentials(data)
            setIsLogged(true)
        } catch (err) {
            const message =  getRequestErrorMessage(err);
            return message;
        }

        // get user and isAdmin?
        try{
            const {data} = await getUser();
            setUser(data)
            if (data.groups.some((e:any) => e.name === "admin_quiz")) {
               setIsAdmin(true)
            }
        }catch(err){
            handleSignOut();
            return ""
        }

        navigate(paths.HOME)
        return "success"

    }
    const handleSignUp = async (userData: PropsDoSignUp) =>{
        try{
            await doSignUp(userData);
            navigate(paths.SIGNIN)
            alert("User created successfully")
            return "success"
        } catch (err) {
            const message =  getRequestErrorMessage(err);
            return message;
        }
    }

    const validateAuth = () => {
        const credentials = getCredentials();
        if(!credentials.token && !credentials.refresh){
            setIsLogged(false)
            setUser(null)
            isAdmin && setIsAdmin(false)
            navigate(paths.SIGNIN)
        }else{
            setIsLogged(true)
            navigate(paths.HOME)
        }
        
    }
    return (
        <AuthContext.Provider 
            value={{
                user,
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
