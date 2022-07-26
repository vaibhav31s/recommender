import React, { useState} from "react";
import "./login.css";
import {submit_login} from './SubmitEvent';


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const LoginClick =()=>{
        localStorage.setItem("b_email", email);
        localStorage.setItem("b_password", password);
        submit_login();
    }
    return (
        <div className="container container-login">
            <div class="wrap">
                <h1 class="register-title">Welcome</h1>
                <form action="#" onSubmit={LoginClick}>
                    <div class="register-switch">
                        <input type="radio" name="sex" value="F" id="sex_f" class="register-switch-input" checked/>
                        <label for="sex_f" class="register-switch-label">Buyer</label>
                        <input type="radio" name="sex" value="M" id="sex_m" class="register-switch-input"/>
                        <label for="sex_m" class="register-switch-label">Seller</label>
                    </div>
                    <input type="email" class="register-input" placeholder="Email address" onChange={(e)=>setEmail(e.target.value)}/>
                    <input type="password" class="register-input" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                    <input type="submit" value="Login" class="register-button"/>
                </form>
            </div>
        </div>
    );
  
}


export default Login;
