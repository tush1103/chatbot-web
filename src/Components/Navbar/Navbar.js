import React from "react";
import "../Home/home.css";

function Navbar() {
  return (
    <nav>
      <div class="chatbot">
        <p>Chatbot</p>
      </div>
      <ul>
        <li>
          <a href="../home">Home</a>
        </li>
        <li>
          <a href="../login">Login</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
