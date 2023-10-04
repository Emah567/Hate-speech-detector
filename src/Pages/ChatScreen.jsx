import React, { useState,useEffect } from "react";
import "../Pages/styling/chatscreenDesign.css";
import Spinner from "./spinner";
import ChatMessage from "./MessageBox.jsx"
let model;

function ChatScreen() {
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  

  const handleSendMessage = () => {
    if (inputMessage.trim() !== "") {
      const newMessage = {
        text: inputMessage,
        sender: "user",
      };

      // Add the new message to the messages array
      setMessages([...messages, newMessage]);

      // Clear the input field
      setInputMessage("");
    }
  };
  useEffect(() => {
    const loadModel = async () => {
      // Loading model
      // 0.9 is the minimum prediction confidence.
   let    model = await window.toxicity.load(0.9);
      if (!model) {
        console.log("Model not loaded yet.");
      }
      // Display chat
      setLoading(false);
    };
    // Load model
    loadModel();
});

  return (
    <>{loading?<Spinner/>:  <div className="chatBody">
    <div className="headeer">
      <h1 id="header">ChatAI</h1>
    </div>
    <div className="chat">
    
        {messages.map((message, index) => (
           <ChatMessage indexes={index} message={message} model={model} />
        ))}
   
      <div className="bottomNavbar">
        <div className="MessagingBox">
          <input
            type="text"
            name="chatText"
            id="Text"
            placeholder="Check your message..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
          />
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="19" viewBox="0 0 14 19" fill="none">
<path d="M6.94 12C6.10667 12 5.39833 11.7083 4.815 11.125C4.23167 10.5417 3.94 9.83333 3.94 9V3C3.94 2.16667 4.23167 1.45833 4.815 0.875C5.39833 0.291667 6.10667 0 6.94 0C7.77333 0 8.48167 0.291667 9.065 0.875C9.64833 1.45833 9.94 2.16667 9.94 3V9C9.94 9.83333 9.64833 10.5417 9.065 11.125C8.48167 11.7083 7.77333 12 6.94 12ZM6.94 19C6.65667 19 6.419 18.904 6.227 18.712C6.035 18.52 5.93933 18.2827 5.94 18V15.925C4.39 15.7083 3.07333 15.0583 1.99 13.975C0.906667 12.8917 0.248333 11.5917 0.015 10.075C-0.035 9.79167 0.0400003 9.54167 0.24 9.325C0.44 9.10833 0.706667 9 1.04 9C1.27333 9 1.48167 9.08767 1.665 9.263C1.84833 9.43833 1.965 9.65067 2.015 9.9C2.23167 11.0667 2.79833 12.0417 3.715 12.825C4.63167 13.6083 5.70667 14 6.94 14C8.17333 14 9.24833 13.6083 10.165 12.825C11.0817 12.0417 11.6483 11.0667 11.865 9.9C11.915 9.65 12.0357 9.43733 12.227 9.262C12.4183 9.08667 12.631 8.99933 12.865 9C13.1817 9 13.44 9.10833 13.64 9.325C13.84 9.54167 13.915 9.79167 13.865 10.075C13.6317 11.5917 12.9733 12.8917 11.89 13.975C10.8067 15.0583 9.49 15.7083 7.94 15.925V18C7.94 18.2833 7.844 18.521 7.652 18.713C7.46 18.905 7.22267 19.0007 6.94 19ZM6.94 10C7.22333 10 7.461 9.904 7.653 9.712C7.845 9.52 7.94067 9.28267 7.94 9V3C7.94 2.71667 7.844 2.479 7.652 2.287C7.46 2.095 7.22267 1.99933 6.94 2C6.65667 2 6.419 2.096 6.227 2.288C6.035 2.48 5.93933 2.71733 5.94 3V9C5.94 9.28333 6.036 9.521 6.228 9.713C6.42 9.905 6.65733 10.0007 6.94 10Z" fill="#F8F8F8"/>
</svg> 
        </div>
        <div className="button"  onClick={handleSendMessage}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="SVG"
            width="29"
            height="23"
            viewBox="0 0 29 23"
            fill="none"
          >
            <path
              d="M0 3L4.09893 10.4464L18.4452 5.4031L6.51007 14.8266L10.609 22.273L28.0817 0.0985999L0 3Z"
              fill="#F8F8F8"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
    }
    ()
    </>
  );
}

export default ChatScreen;
