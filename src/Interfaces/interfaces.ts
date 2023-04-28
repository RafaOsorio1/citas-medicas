import { ReactNode } from "react"

export interface appointments {
    name?: string
    ID?: number
    date?: string
    time?: string
}
// export interface user {
//     email: string | null;
//     uid: string | null;
//   }
export interface propsProvider{
    inputName: string
    setInputName: (e: string) => void
}
export interface props {
    children: ReactNode | ReactNode[]
}
export interface patient {
    name?: string
    ID?: number
}
export interface state {
    appointments: appointments[],
    deletedPatients: appointments[]
}[]
export interface propsContext{
    isLogin: boolean
    register: (e1: string, e2: string) => void
    loginWithEmailAndPassword: ({email, password}: loginWithEmailAndPassword) => void
}
export interface loginWithEmailAndPassword{
    email: string,
    password:string
}
export interface UserAuht {
    status?: string,
    uid: string,
    email: null | string,
    displayName: null | string,
    errorMessage?: null | string,
    errorCode?: null | string,
    sucess?: boolean,
}
export interface registerWithEmailPasswordI {
    fullName: string,
    email: string,
    password: string
}
export interface userAuthLogOut {
    errorMessage: any | string
}