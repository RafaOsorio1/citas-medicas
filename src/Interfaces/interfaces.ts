import { ReactNode } from "react"

export interface appointments {
    name?: string
    ID?: number
    date?: string
    time?: string
}
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
    signUp: (e1: string, e2: string) => void
    login: (e1: string, e2: string) => void
}