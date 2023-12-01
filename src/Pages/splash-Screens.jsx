/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect,useState} from "react"
import "./styling/splashScreen.css"
import Spline from '@splinetool/react-spline';
import { Link } from "react-router-dom"
function SplashScreen() {
  const [loading, setLoading] = useState(false); // To track loading state

  // Function to handle the button click
  // eslint-disable-next-line no-unused-vars
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
<Spline className="Spline" scene="https://prod.spline.design/qkruWhkMnFzVRAmu/scene.splinecode" />


<Link to="/SignUpScreen">

<button id="btn" className="shadow__btn">
  <span id="btn-text">
  Get Started
  </span>
</button>
</Link>

<div className="text">
<p>Detecting Hate Speech: Chat AI's Top Priority.</p>
</div>

</div>
  

  
    </>
  )
}

export default SplashScreen





