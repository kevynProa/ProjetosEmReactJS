//MY IMPORTS
import React from 'react'
import Home from '../pages/homepage/Home';
import About from '../pages/aboutpage/About';
import Contact from '../pages/contactpage/Contact';
import Profile from '../pages/profilepage/Profile';
import ListaDeTarefas from '../pages/projeto01/Projeto01';
import Contador from '../pages/projeto02/Projeto02';
import RelogioDigital from '../pages/projeto03/Projeto03';
import ConversorDeMoedas from '../pages/projeto04/Projeto04';
import Calculadora from '../pages/projeto05/Projeto05';
import GaleriaDeImagens from '../pages/projeto06/Projeto06';

//CONFIG REACT ROUTES
import {  Route, Routes, } from 'react-router-dom'







const AppRouter = () => {
  return (

    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/projeto01" element={<ListaDeTarefas/>} />
        <Route path="/projeto02" element={<Contador/>} />
        <Route path="/projeto03" element={<RelogioDigital/>} />
        <Route path="/projeto04" element={<ConversorDeMoedas/>} />
        <Route path="/projeto05" element={<Calculadora/>} />
        <Route path="/projeto06" element={<GaleriaDeImagens/>} />
    </Routes>

  )
}

export default AppRouter
