import React, { useState } from "react";
import { useAppDispatch } from "../../hooks";
import { addPatientAction } from "../../features/slices/Appointments";
import { appointments } from "../../Interfaces/interfaces";
import { useForm, SubmitHandler } from "react-hook-form";

type dataCita = {
  name: string;
  id: string;
  date: string;
  time: string;
};

export const Logica = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<dataCita>();
  const onSubmit: SubmitHandler<Record<string, string>> = (data) => {
    patient.name = data.name;
    patient.ID = parseInt(data.id);
    patient.date = data.date;
    patient.time = data.time;
    dispatch(addPatientAction(patient));
  };
  const dispatch = useAppDispatch();
  let patient: appointments = {};
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="input-name">Nombre del paciente</label>
          <input
            id="input-name"
            type="text"
            {...register("name", { required: true })}
            placeholder="Rafael Rodelo"
          />
          <label htmlFor="input-ID">Identificación</label>
          <input
            id="input-ID"
            type="number"
            {...register("id", { required: true })}
          />
          <label htmlFor="input-date">Fecha</label>
          <input
            id="input-date"
            type="date"
            {...register("date", { required: true })}
          />
          <label htmlFor="input-time">Hora</label>
          <input
            id="input-time"
            type={"time"}
            {...register("time", { required: true })}
          />
          <button id="button-get-data" type="submit">
            Program
          </button>
        </form>
      </div>
    </div>
  );
};
// onClick={useAppDispatch(setAppointmentsAction)
