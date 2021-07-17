import React from "react";
import "../assets/css/Login.css";
import spotify_logo from "../assets/images/spotify_logo.png";

function Login() {
  return (
    <div className="login">
      <img src={spotify_logo} alt="SPOTIFY" />
      <a>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;
