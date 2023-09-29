import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import { useState,useEffect} from 'react'
import SplashScreen from './Pages/splash-Screens';
import LoginScreen from './Pages/LoginScreen';
import './App.css'

import "aos/dist/aos.css";
import AOS from "aos";
function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, delay: 0 });
  }, []);
  return (
    <>
    <Router>
    <Routes>
      <Route path="/" element={<SplashScreen/>} />
      <Route path="/LoginScreen" element={<LoginScreen/>} />
     
    </Routes>
  </Router>

     
    </>
  )
}

export default App
