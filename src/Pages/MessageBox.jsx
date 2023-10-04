import React, { useState, useEffect } from "react";
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
          {loading ? <span className="badge --loading">Loading toxicity..</span> : null}

        </div>
      </div>
      <div className="chatBox2">  
        {toxic ? <span className="badge --toxic">Hate Speech</span> : null}
        {!loading && !toxic ? <span className="badge --friendly">Not toxic :)</span> : null}
     </div>

    </>
  );
}

export default ChatMessage;
