import React, { createContext, useContext, useState } from "react";
import {
  propsContext,
  props,
  loginWithEmailAndPassword,
} from "../Interfaces/interfaces";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../firebase/firebase";
import { FirebaseError } from "firebase/app";
import { doc, setDoc } from "firebase/firestore";
export const AuthContext = createContext<propsContext>({} as propsContext);

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

export const AuthProvider =  ({ children }: props): JSX.Element => {
  const register = async(email: string, password: string) => {
    const data = await createUserWithEmailAndPassword(auth, email, password);
    await setDoc(doc(db, "users", data.user.uid), {});
  };

  const loginWithEmailAndPassword = async ({
    email,
    password,
  }: loginWithEmailAndPassword) => {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential;
  };

  const value: propsContext = {
    isLogin: false,
    register,
    loginWithEmailAndPassword,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
