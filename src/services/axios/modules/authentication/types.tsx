
export type PropsDoSignIn = {
    username: string | undefined;
    password: string | undefined;
}

export interface ResDoSignIn {
    access: string
    refresh_access: string
}