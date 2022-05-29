import apiAxios from "../..";
import { PropsDoSignIn, ResDoSignIn } from "./types";


export const doSignIn = (data: PropsDoSignIn ) =>  
    apiAxios.post<ResDoSignIn>('token/', data)
