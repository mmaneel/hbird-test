import React from "react";
import react ,{useState} from 'react';
import LOGO from "../LOGO.png";
import usern from "../usern.png";
import passw from "../passw.png";
import akar from "../akar.png";
import fcb from "../fcb.png"
import git from "../git.png"
import google from "../google.png"

function RegisterForm(){
    return(
        <div>
        <form id="register">
             <div className="loginFields">
                <div className="button-box " ref={this.props.containerRef}>
                    <div id="bttn"></div>  
                    <button className="btn">Login</button>
                    <button className="btn" >Register</button>
                </div>
                <button className="back"><img src={akar}  />  </button> 
            </div>

            <div className="logo">
                <img  src={LOGO} />
                <h1>Welcome</h1>
                <p>Log in to your account to continue </p>
            </div>
            
            <div className="formGroup">
                <div className="formItem">
                    <img className="icon1" src={usern} />
                    <input type={"text"} className="name" placeholder="User Name"/>

                </div>
                <div className="formItem">
                     <img  className="icon2" src={passw} />
                     <input type={"password"} className="name" placeholder="Password"/>

                </div>
                
                <a href="#" className="forgotPass">Forgot your password?</a>
            </div>
            <div className="footer">
                <button className="loginBtn" >Register</button>
            </div>
            <div className="connect">
                <p>
                    Or connect with
                </p>
                <div className="sclm">
                    <a href="https://fr-fr.facebook.com/" className="bac"><img src={fcb}  />  </a>
                    <a  href="https://github.com/" className="bac"><img src={git}  />  </a>
                    <a  href ="#" className="bac"><img src={google}  />  </a>
                </div>

            </div>
            
        </form>

        
   </div>
        
    )
}
export default RegisterForm