import React from 'react'
import RegisterForm from './components/RegisterForm'
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import SuccessForm from './components/SuccessForm';
import Registered from './components/Registerd';

export default function App() {
  return (
    <div>
    <Routes>
    <Route path="/" element={<RegisterForm/>} />
    <Route path="/success" element={<SuccessForm/>} /> 
    <Route path="/registered" element={<Registered/>} /> 
    </Routes>
    <Toaster/>
    </div>
  )
}

