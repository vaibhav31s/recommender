import React, {useState} from 'react'
import './register.css'
import {submit_registration} from './registerEvent';
import { Link } from 'react-router-dom';
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sellerOrBuyer, setSellerOrBuyer] = useState("/login");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");


  const LoginClick =()=>{
    
      localStorage.setItem("b_email", name);
      localStorage.setItem("b_password", username);

      localStorage.setItem("b_email", email);
      localStorage.setItem("b_password", password);

  


      console.log(sellerOrBuyer)
      // submit_login();
  }

  return (
    <div className="container container-login">
    <div class="wrap">
    <h1 class="register-title">Registration Form</h1>
    <form action="#" onSubmit={LoginClick}>
        <div class="register-switch">
            <input type="radio" name="sex" value="F" id="sex_f" class="register-switch-input" checked/>
            <label for="sex_f" class="register-switch-label" onClick={()=>{setSellerOrBuyer("/login")}}>Buyer</label>
            <input type="radio" name="sex" value="M" id="sex_m" class="register-switch-input"/>
            <label for="sex_m" class="register-switch-label" onClick={()=>{setSellerOrBuyer("/blogin")}}>Seller</label>
        </div>
        <input type="name" class="register-input" placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
        <input type="username" class="register-input" placeholder="Username" onChange={(e)=>setUsername(e.target.value)}/>
        <input type="email" class="register-input" placeholder="Email address" onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" class="register-input" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
       
        <input type="submit" value="Registration" class="register-button"/>
    </form>
    <p id="register-link">Already have an account? <Link to="/login">Login</Link></p>
</div>
</div>
  )
}

export default Register