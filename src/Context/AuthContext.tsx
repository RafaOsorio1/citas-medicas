import React, { createContext, useContext } from "react";
import {
  propsContext,
  props,
  loginWithEmailAndPassword,
} from "../Interfaces/interfaces";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/firebase";
import { FirebaseError } from "firebase/app";
export const AuthContext = createContext<propsContext>({} as propsContext);

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

export const AuthProvider = ({ children }: props): JSX.Element => {
  const signUp = (email: string, password: string) =>
    createUserWithEmailAndPassword(auth, email, password);

  const loginWithEmailAndPassword = async ({email, password} : loginWithEmailAndPassword) => {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential;
  };
  // const loginWithEmailAndPassword = async ({
  //   email,
  //   password,
  // }: loginWithEmailAndPassword) => {
  //   try {
  //     await signInWithEmailAndPassword(auth, email, password);
  //   } catch (error) {
  //     if (error instanceof FirebaseError) {
  //       return console.log(error.message);
  //     }
  //   }
  // };
  const value: propsContext = {
    isLogin: false,
    signUp,
    loginWithEmailAndPassword,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
