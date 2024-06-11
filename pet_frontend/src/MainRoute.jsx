
import React from 'react'
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from './HomePage/Home';
import ListPets from './ListPets/ListPets'
import Aboutus from './components/Aboutus';
import FaQ from './HelpAndAdvice/FaQ'
import PetCare from './HelpAndAdvice/PetCare';
import PetLogin from './Login/PetLogin';
import SiginIn from './Login/SiginIn';
import AdminLogin from './Login/AdminLogin';
import Application from './HelpAndAdvice/Application';
import Dashboard from './Login/Dashboard';
import { AuthProvider } from './NavBar/AuthContext'
import NavBar from './NavBar/NavBar';



export const MainRoute = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pets-list" element={<ListPets />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/application" element={<Application />} />
          <Route path="/faq" element={<FaQ />} />
          <Route path="/petcareinfo" element={<PetCare />} />
          <Route path="/login" element={<PetLogin />} />
          <Route path="/siginIn" element={<SiginIn />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path='/admin-dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default MainRoute;

