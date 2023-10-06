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
      

We're committed to maintaining a respectful and safe environment for everyone in this chat. Our Hate Speech Checker is here to help ensure that conversations remain free from hate speech and offensive content. It works silently in the background to identify and address any potentially harmful messages.

Feel free to chat with confidence, knowing that we take the well-being of our users seriously. If you have any questions or concerns, please don't hesitate to reach out. Enjoy your conversation!"
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