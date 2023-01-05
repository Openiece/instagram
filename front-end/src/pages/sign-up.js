import React from "react";
import "../styles/up.css";
import img3 from "../photos/logo-ig.png"
export const SignUpPage = () => {
    return (
        <div className="con3">
            <img src={img3} alt="hho" className="insta"></img>
            <div className="text">Sign up to see photos an videos from your friends</div>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className='fb-login'>Log in with Facebook</a>
            <div className="or">Or</div>
            <input className="lol1" placeholder=" Email" type="email"></input>
            <input className="lol2"  placeholder=" Fullname" type="text"></input>
            <input className="lol3" placeholder=" UserName" type="text"></input>
            <input className="lol4" placeholder=" Password" type="password"></input>

            <div className="idk">
                <div className="text2">People who use our service may have uploaded your contact information to Instagram.<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="learn">Learn More</a></div>
            </div>

            <div className="idk1">
                <div className="text3">By signing up, you agree to our
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="learn"> Terms</a>, 
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="learn"> Privacy</a>, 
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="learn"> Policy</a> 
                    , and 
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="learn"> Cookies policy</a>
                </div>
            </div>


            <button className="butt">Sign Up</button>



            <div className="con4">
                <div className="dont">Have an account?    .  <a href="http://localhost:3000/Signin">     Log in</a></div>
            </div>



            <div className="end">
                <div className="arr">Get the app.</div>
                <img alt="app" className="arrstore"src="https://static.cdninstagram.com/rsrc.php/v3/yt/r/Yfc020c87j0.png"></img>
                <img alt="app"className="google"src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"></img>
            </div>
        </div>
    )
}