import React from "react";
import img from "../photos/instagraam.png";
import "../styles/sign-in.css";
import img2 from "../photos/logo-ig.png";
export const SignInPage = () => {
  return (
    <div className="allinone">



      <img className="ip" src={img} alt=""></img>



      <div className="con">
        <img className="ig" src={img2} alt=""></img>
        <input className="email" type="email" placeholder=" Email"></input>
        <input className="pass" type="password" placeholder=" Password"></input>
        <div className="bu">Log in</div>
        <div className="oridk">OR</div>
        <div className="fb">
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="fb-login"> Log in with Facebook</a>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="trauma">Forgot password?</a>
        </div>
      </div>

      <div className="con2">
        <div className="all">
          <div className="acc">Don't have an account?</div>
          <a href="http://localhost:3000/Signup" className="sign-up">Sign up</a>
        </div>
      </div>

      <div className="half">
        <div className="app">Get the app.</div>
        <img alt="app" className="appstore"src="https://static.cdninstagram.com/rsrc.php/v3/yt/r/Yfc020c87j0.png"></img>
        <img alt="app"className="googleplay"src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"></img>
      </div>
    </div>
  );
};
