
export type PropsDoSignIn = {
    username: string | undefined;
    password: string | undefined;
}
export type PropsDoSignUp = {
    username: string;
    first_name: string;
    last_name: string;
    email:string;
    password: string;
    confirm_password: string;
}
export interface ResDoSignIn {
    access: string
    refresh: string
}