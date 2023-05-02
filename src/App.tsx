import React from "react";
import { useState } from "react";
import "./App.css";
import { Header } from "./Components/Header/Header";
import { Logica } from "./Components/Logica/Logica";
import { PatientsList } from "./Components/PatientsList/PatientsList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <Logica />
      <PatientsList />
    </div>
  );
}

export default App;
