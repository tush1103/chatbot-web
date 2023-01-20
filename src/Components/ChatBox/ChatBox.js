import axios from "axios";
import React, { useState } from "react";
import "./chatbox.css";

function ChatBox() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState([]);

  const[flag,setFlag]=useState(false);

  const updateResponse = (event) => {
    setInput(event.target.value);
    console.log(event.target.value);
  };

  const sendMessage = () => {
    if (input !== "") {
      const date = new Date();
      setResponse((prevData) => [
        ...prevData,
        {
          name: "User",
          message: input,
          time: date.getTime(),
        },
        
      ]);
      setFlag(true)
      
    }
  };
  const inputKeyPress = (event) => {
    if (event.key === "Enter") {
        
    }
    
  };
  const fetchResponse=async()=>{
    await axios.post("http://192.168.173.206:5000/response",{
        msg:input
    }).then((response)=>[
        console.log(response)
    ])
    

}
if(flag){
    fetchResponse();
    setInput("");
    setFlag(false)
}

  return (
    <div className="container">
      <div className="bot">
        <p>
          Chatbot Assistant
          <button
            type="button"
            class="btn-close"
            disabled
            aria-label="Close"
          ></button>
        </p>
      </div>

      <div style={{ height: "75%" }}>
        {response.map((item, index) => {
          return (
            <div
              style={{
                padding: "8px",
                display: "flex",
                justifyContent: "right",
              }}
            >
              {item.message}
            </div>
          );
        })}
      </div>

      <div class="input-group mb-3">
        <input
          value={input}
          onChange={updateResponse}
          type="text"
          class="form-control"
          placeholder="Write your text here"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <button
          onClick={() => {
            sendMessage();
          }}
          class="btn btn-outline-secondary"
          id="button-addon2"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatBox;
