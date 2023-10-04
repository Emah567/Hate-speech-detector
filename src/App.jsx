import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import { useState,useEffect} from 'react'
import SplashScreen from './Pages/splash-Screens';
import LoginScreen from './Pages/LoginScreen';
import './App.css'

import "aos/dist/aos.css";
import AOS from "aos";
import PreLoader from "./Pages/preLoader";
import RegisterScreen from "./Pages/styling/RegisterScreen";
import ChatScreen from "./Pages/ChatScreen";
function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, delay: 0 });
  }, []);
  return (
    <>
    <Router>
    <Routes>
      <Route path="/" element={<PreLoader/>} />
      <Route path="/SplashScreen" element={<SplashScreen/>} />
      <Route path="/LoginScreen" element={<LoginScreen/>} />
      <Route path="/SignUpScreen" element={<RegisterScreen/>} />
      <Route path="/ChatScreen" element={<ChatScreen/>} />
     
    </Routes>
  </Router>

     
    </>
  )
}

export default App
