import React from 'react'
import { Header } from '../Components/Header/Header'
import { Logica } from '../Components/Logica/Logica'
import { PatientsList } from '../Components/PatientsList/PatientsList'
import { useContext } from 'react'
import { AuthContext, useAuth } from '../Context/AuthContext'

export const Home = () => {
    const auth = useAuth();
    console.log(auth);
  return (
    <>
        <Header></Header>
        <Logica></Logica>
        <PatientsList></PatientsList>
    </>
  )
}
