import Cookies from "js-cookie"
import { ResDoSignIn } from "../../services/axios/modules/authentication/types";


export const setCrendentials = (data:ResDoSignIn) =>{
    Cookies.set("token", data.access);
    Cookies.set('refresh', data.refresh);
}
export const getCredentials = () =>{
    var data:{[id:string]: string | undefined} = {}
    data.token = Cookies.get("token");
    data.refresh = Cookies.get("refresh");
    return data
}