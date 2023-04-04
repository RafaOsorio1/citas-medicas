import { useDispatch, useSelector } from "react-redux";
import {
  deletePatient,
  pacientesSelector,
} from "../../features/slices/Appointments";
import React from "react";
import { appointments } from "../../Interfaces/interfaces";



export const PatientsList = () => {
  const citas = useSelector(pacientesSelector);

  console.log(citas);
  const dispatch = useDispatch();
  return (
    <>
      <section>
        <table>
          <thead>
            <tr>
              <th>Paciente</th>
              <th>Identificación</th>
              <th>Fecha programada</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {citas.map((paciente: appointments) => {
              return (
                <tr key={paciente.ID}>
                  <td>{paciente.name}</td>
                  <td>{paciente.ID}</td>
                  <td>{paciente.date}</td>
                  <td>{paciente.time}</td>
                  <td>
                    <button
                      type="button"
                      onClick={() => {
                        dispatch(deletePatient(paciente));
                      }}
                    >
                      Cancelar cita
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </>
  );
};
