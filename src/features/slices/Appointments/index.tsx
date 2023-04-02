import { createSlice, SliceCaseReducers } from "@reduxjs/toolkit";
import { RootState } from "../../../store";
import { appointments } from "../../../Interfaces/interfaces";

const listPatient = JSON.parse(localStorage.getItem("CitasV1") || "[]");

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
