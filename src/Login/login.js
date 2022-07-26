import React, { useState} from "react";
import "./login.css";
import {submit_login} from './SubmitEvent';
import { Link } from "react-router-dom";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [sellerOrBuyer, setSellerOrBuyer] = useState("/login");

    const LoginClick =()=>{
        localStorage.setItem("b_email", email);
        localStorage.setItem("b_password", password);
        localStorage.setItem("endpoint", sellerOrBuyer);


        console.log(sellerOrBuyer)
        // submit_login();
    }
    return (
        <div className="container container-login">
            <div class="wrap">
                <h1 class="register-title">Welcome</h1>        
                <form action="#" onSubmit={LoginClick}>
                    <div class="register-switch">
                        <input type="radio" name="sex" value="F" id="sex_f" class="register-switch-input"  checked/>
                        <label htmlFor="sex_f" class="register-switch-label" onClick={()=>{setSellerOrBuyer("/login")}}>Buyer</label>
                        <input type="radio" name="sex" value="M" id="sex_m" class="register-switch-input" />
                        <label htmlFor="sex_m" class="register-switch-label"  onClick={()=>{setSellerOrBuyer("/blogin")}}>Seller</label>
                    </div>
                    <input type="email" class="register-input" placeholder="Email address" onChange={(e)=>setEmail(e.target.value)}/>
                    <input type="password" class="register-input" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                    <input type="submit" value="Login" class="register-button"/>
                </form>

                Don't have account? <Link>Register</Link>
            </div>
        </div>
    );
  
}


export default Login;
