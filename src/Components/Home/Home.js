import React from 'react';
import ChatBox from '../ChatBox/ChatBox';
import "./home.css";

function Home(){
    return(
        <>
            <div style={{ width: "100%" }}>
                <img class="homebg" src={require("../../assets/HomeBG.jpg")}></img>
                
            </div>
            <ChatBox/>
        </>
    )
}

export default Home;