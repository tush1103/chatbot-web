import React from 'react';
import "./home.css";

function Home(){
    return(
        <div>
            <img class="homebg" src={require("../assets/HomeBG.jpg")}></img>
            <nav>
                <div class="chatbot">
                    <p>Chatbot</p>
                </div>
                <ul>
                    <li><a href="../home">Home</a></li>
                    <li><a href="../login">Login</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Home;