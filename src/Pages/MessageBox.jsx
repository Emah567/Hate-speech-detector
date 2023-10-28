import { useState, useEffect } from "react";
import "../Pages/styling/chatscreenDesign.css";

// Import TensorFlow.js
import * as toxicity from "@tensorflow-models/toxicity";

function ChatMessage({ indexes, message }) {
  const [toxic, setToxic] = useState(false);
  const [loading, setLoading] = useState(true);


  
  useEffect(() => {
    const checkHateSpeech = async () => {
      // Load the toxicity model
      const model = await toxicity.load();

      // Check hate speech toxicity
      const predictions = await model.classify([message.text]);

      // Check if any category is toxic
      const isToxic = predictions.some((prediction) => prediction.results[0].match);

      setToxic(isToxic);
      setLoading(false);
    };

    checkHateSpeech();
  }, [message]);

  return (
    <>
      <div className="chatBox">
        <div key={indexes} className={`ChatBoxText ${message.sender}`}>
          {message.text}
          {loading ? <div className="loading-animation"></div> : null}

        </div>
      </div>
      <div className="chatBox2">  
        {toxic ?   <div className="toxic-message">
      <span className="badge --toxic">Hate Speech</span>
      <p>This message contains toxic language and should not be used. &#128545;</p>
    </div>: null}
        {!loading && !toxic ?    <div className="friendly-message">
      <span className="badge --friendly">Friendly</span>
      <p>This message is friendly and safe to use. 😊</p>
    </div>
 : null}
     </div>

    </>
  );
}

export default ChatMessage;
