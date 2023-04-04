import React, { useState } from "react";
import { useAppDispatch } from "../../hooks";
import { addPatientAction } from "../../features/slices/Appointments";
import { appointments } from "../../Interfaces/interfaces";

export const Logica = () => {
  const dispatch = useAppDispatch();
  const [inputName, setInputName] = useState("");
  const [inputID, setInputID] = useState("");
  const [inputDate, setInputDate] = useState("");
  const [inputTime, setInputTime] = useState("");
  let patient: appointments = {};

  //FUNCIÓN HANDLE DEL INPUT NAME

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputName(event.target.value);
  };

  //FUNCIÓN HANDLE DEL INPUT ID

  const handleChangeInputID = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputID(event.target.value);
  };

  //FUNCIÓN HANDLE DEL INPUT DATE

  const handleChangeInputDate = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputDate(event.target.value);
  };

  //FUNCIÓN HANDLE DEL INPUT TIME

  const handleChangeInputTime = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log(event.target.value);
    setInputTime(event.target.value);
  };

  //FUNCIÓN HANDLE DEL BOTÓN AGREGAR PACIENTE

  const handleClick = () => {
    patient.name = inputName;
    patient.ID = parseInt(inputID);
    patient.date = inputDate;
    patient.time = inputTime;
    dispatch(addPatientAction(patient));
  };

  // FUNCIÓN HANDLE DEL BOTÓN VALIDAR FECHA

  return (
    <div>
      <div>
        <form>
          <label htmlFor="input-name">Name of patient</label>
          <input
            id="input-name"
            type="text"
            value={inputName}
            onChange={handleChangeInput}
          />
          <label htmlFor="input-ID">ID of Patient</label>
          <input
            id="input-ID"
            type="number"
            value={inputID}
            onChange={handleChangeInputID}
          />
          <label htmlFor="input-date">Date available</label>
          <input
            id="input-date"
            type="date"
            value={inputDate}
            onChange={handleChangeInputDate}
          />
          <label htmlFor="input-time">Hour available</label>
          <input
            id="input-time"
            type={"time"}
            value={inputTime}
            onChange={handleChangeInputTime}
          />
          <button id="button-get-data" onClick={handleClick} type="button">
            Program
          </button>
        </form>
      </div>
    </div>
  );
};
// onClick={useAppDispatch(setAppointmentsAction)
