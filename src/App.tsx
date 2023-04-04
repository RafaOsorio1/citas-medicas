import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Header } from "./Components/Header/Header";
import { Logica } from "./Components/Logica/Logica";
import { PatientsList } from "./Components/PatientsList/PatientsList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <Logica />
      <PatientsList />
    </div>
  );
}

export default App;
