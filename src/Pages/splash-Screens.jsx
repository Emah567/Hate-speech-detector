import React, { useEffect } from "react"
import "./styling/splashScreen.css"
import { Link } from "react-router-dom"
import Images from "..//assets/images/image (2).svg"
function SplashScreen() {
  return (
    <>
    <div className="body">
   
    <div className="splashScreen">
      <div className="Text">
        <span className="futureChat" data-aos="zoom-in">
        The Future of Chat is Here
With AI Technology
        
       
        </span>
        <br />
        <span className="futureChatText" data-aos="fade-in">
        "The future of chat is here with AI technology" implies that the integration of AI into chat technology is already happening and that it's an exciting development for the way we communicate.
AI-powered chatbots are becoming increasingly sophisticated and are able to understand and respond to natural language,
        </span>
    </div>
    <button id="btn">
      <Link to="/LoginScreen">
      <span id="btn-text">
      Get Started

      </span>
      </Link>
    
    </button>
    </div>
   </div>
   
    </>
  )
}

export default SplashScreen