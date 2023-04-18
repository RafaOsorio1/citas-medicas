import React, { createContext, useContext } from "react";
import { propsContext, props } from "../Interfaces/interfaces";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
export const AuthContext = createContext<propsContext>({} as propsContext);

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

export const AuthProvider = ({ children }: props): JSX.Element => {
  const signUp = (email: string, password: string) =>
    createUserWithEmailAndPassword(auth, email, password);
  const login = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password);
  }
  const value: propsContext = {
    isLogin: false,
    signUp,
    login,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
