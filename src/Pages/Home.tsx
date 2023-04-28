import React from "react";
import { Header } from "../Components/Header/Header";
import { Logica } from "../Components/Logica/Logica";
import { PatientsList } from "../Components/PatientsList/PatientsList";

export const Home = () => {
  return (
    <>
      <Header></Header>
      <Logica></Logica>
      <PatientsList></PatientsList>
    </>
  );
};
