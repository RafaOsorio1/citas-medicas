import { createSlice, SliceCaseReducers } from "@reduxjs/toolkit";
import { RootState } from "../../../store";
import { appointments, UserAuht } from "../../../Interfaces/interfaces";
import {db} from '../../../firebase/firebase'
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import {getCurrentUser} from '../../../firebase/getUser'

const listPatient = JSON.parse(localStorage.getItem("CitasV1") || "[]");

const fbStore = async (patient: appointments, user: UserAuht) => {
  const email= user.email;
  const uid = user.uid;
  try {
    const collectionRef = doc(collection(db, 'users', user.uid, 'citas'));
    await setDoc(collectionRef, patient);
  } catch (error: any) {
    console.log('esta madre fallo ', error);
  }
}

export const appointmentsSlice = createSlice<
  appointments[],
  SliceCaseReducers<appointments[]>
>({
  name: "appointmentsPatient",
  initialState: listPatient,
  reducers: {
    addPatient: (state, action) => {
      const patient: appointments = {
        name: action.payload.name,
        ID: action.payload.ID,
        date: action.payload.date,
        time: action.payload.time
      };
      state.push(patient);
      localStorage.setItem("CitasV1", JSON.stringify(state));
      fbStore(patient, getCurrentUser())
    },
    deletePatient: (state, action) => {
      const newList = state.filter(item => item.ID !== action.payload.ID);
      localStorage.setItem('CitasV1', JSON.stringify(newList))
      return state.filter(item => item.ID !== action.payload.ID);
    },
  },
});
export const { addPatient, deletePatient } = appointmentsSlice.actions;

export const pacientesSelector = (state: RootState) =>
  state.appointmentsPatient;
export const { addPatient: addPatientAction } = appointmentsSlice.actions;
// const updateState = state.filter(item => item.ID !== action.payload.ID);
// localStorage.setItem("CitasV1", JSON.stringify(updateState));
// return updateState
