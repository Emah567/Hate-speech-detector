import React, { useEffect,useState} from "react"
import "./styling/splashScreen.css"
import { Link } from "react-router-dom"
import Images from "..//assets/images/image (2).svg"
function SplashScreen() {
  const [loading, setLoading] = useState(false); // To track loading state

  // Function to handle the button click
  const handleButtonClick = () => {
    setLoading(true); // Set loading state to true when the button is clicked

    // You can add any additional logic or API calls here if needed

    // For demonstration purposes, we'll use a setTimeout to simulate an asynchronous task
    setTimeout(() => {
      // After the task is complete, you can navigate to the next screen
      setLoading(false); // Set loading state back to false
    }, 2000); // Simulated loading time (2 seconds)
  };

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
    <Link to="/SignUpScreen">

    <button id="btn">
      <span id="btn-text">
      Get Started

      </span>
    
    </button>
    
    </Link>
    </div>
   </div>
   
    </>
  )
}

export default SplashScreen