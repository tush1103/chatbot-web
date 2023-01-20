import React from 'react';
import "./login.css";

function Login(){
    return(
        <div class="center">
            <img class="bg" src={require("../assets/whiteBG.png")} alt="background" />
            <form class="grey">
                <p>Login</p>
                <div class="login_with">
                    <button class="google">Login With<img class="google_img" src={require("../assets/google.jpg")} alt="google" /></button>
                    <button class="otp">Login with Phone Number</button>
                </div>
            </form>
            <form method="post" class="purple">
                <div class="txt_field">
                        <input type="text" class="Email" required />
                        <label>Email</label>
                </div>
                <div class="txt_field">
                    <input class="password" type="password" required />
                            <label>Password</label>
                </div>
                <button class="submit">Continue</button>
            </form>
    </div>
    )
}

export default Login;