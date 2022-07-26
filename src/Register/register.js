import React, {useState} from 'react'
import './register.css'
import {submit_registration} from './registerEvent';
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sellerOrBuyer, setSellerOrBuyer] = useState("/login");
  const [address, setAddress] = useState("");
  const [states, setStates] = useState("");
  const [city, setCity] = useState("");
  const [pin, setPin] = useState("");

  const LoginClick =()=>{
      localStorage.setItem("b_email", email);
      localStorage.setItem("b_password", password);
      localStorage.setItem("b_address", address);
      localStorage.setItem("b_states", states);
      localStorage.setItem("b_city", city);
      localStorage.setItem("b_pin", pin);


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
        <input type="email" class="register-input" placeholder="Email address" onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" class="register-input" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
        <input type="address" class="register-input" placeholder="Address" onChange={(e)=>setAddress(e.target.value)}/>
        
        <select id="inputState" class="form-control">
          <option selected onChange={(e)=>setStates(e.target.value)}>Select State...</option>
          <option>Maharashtra</option>
          <option>Delhi</option>
          <option>Karnataka</option>

        </select>
        <select id="inputCity" class="form-control">
          <option selected onChange={(e)=>setCity(e.target.value) }>Select City...</option>
          <option>Mumbai</option>
          <option>Pune</option>
          <option>Palghar</option>

        </select>
        <input type="pincode" onChange={(e)=>setPin(e.target.value) } class="register-input" placeholder="Pin Code"/>
        <input type="submit" value="Registration" class="register-button"/>
    </form>
</div>
</div>
  )
}

export default Register