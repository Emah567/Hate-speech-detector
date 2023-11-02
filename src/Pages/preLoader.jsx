import { useEffect,useState } from "react"
import SplashScreen from "./splash-Screens";
import "../Pages/styling/Loader.css";

function PreLoader() {
    const [showLoader, setShowLoader] = useState(false);
  useEffect(() => {
    // Simulate a delay to demonstrate the loader
    const timer = setTimeout(() => {
      setShowLoader(true);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
    {!showLoader ? (
    <div className="bodyes"><div className="content">
	<div className="circle"></div>
	<div className="circle"></div>
	<div className="circle"></div>
	<div className="circle"></div>
</div>
</div>
     
    ) :<SplashScreen/> }
    
      
    </>
  )
}

export default PreLoader