import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase";
import { FirebaseError } from "firebase/app";
import { registerWithEmailPasswordI } from "../Interfaces/interfaces";

export const registerWithEmailPassword = async ({
  fullName,
  email,
  password,
}: registerWithEmailPasswordI) => {
  try {
    const res = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const { uid, photoURL } = res.user;
    /* Obtenemos los datos del registro que se hizo e inmediatamente lo actualizamos */
    const user = auth.currentUser;
    await updateProfile(user!, { displayName: fullName });
    return {
      success: true,
      uid,
      photoURL,
      email,
      errorMessage: "",
    };
  } catch (error) {
    if (error instanceof FirebaseError) {
      return {
        success: false,
        uid: "",
        photoURL: "",
        email: "",
        errorMessage: error.message,
      };
    }
  }
};