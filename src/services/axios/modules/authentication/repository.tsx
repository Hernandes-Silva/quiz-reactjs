import apiAxios from "../..";
import { PropsDoSignIn, PropsDoSignUp, ResDoSignIn } from "./types";


export const doSignIn = (data: PropsDoSignIn) =>
    apiAxios.post<ResDoSignIn>('token/', data, {
        headers: {
            Authorization: false
        }
    })
export const doSignUp = (data: PropsDoSignUp) =>
    apiAxios.post("user-create/", data, {
        headers: {
            Authorization: false
        }
})

export const getUser = async () => 
    await apiAxios.get("user/")