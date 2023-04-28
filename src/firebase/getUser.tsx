import { user } from "../Interfaces/interfaces";
import { auth } from "./firebase";

export const getCurrentUser = (): user => {
  const currentUser = auth.currentUser;
  if (currentUser) {
    return {
      email: currentUser.email,
      uid: currentUser.uid,
    };
  } else {
    console.log("No esta autenticado");
  }
};
