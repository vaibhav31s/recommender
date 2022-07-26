import React, { Component } from 'react';
import './login.css';
export class login extends Component {
  render() {
    return (
        <div class="container">
        <div class="card">
            <div class="top-row">
                <h1>Hello again</h1>
                <p>Log in with your email and password</p>
            </div>
            <div class="card-details">
                <input type="text" placeholder="Enter your name"/>
                <i class="fa fa-envelope"></i>
            </div>
            <div class="card-details">
                <input type="password" id="password-input" placeholder="Enter your password"/>
                <i class="fa fa-lock"></i>
                <span><small class="fa fa-eye-slash passcode"></small></span>
                
            </div>
               <p class="forget">Forgot your password?</p>
               
                   <button class="sign-in">Sign in</button>
              
               <p class="sign-up">Dont't have an account?<a href="#"> Sign up</a></p>
            
        </div>
        
    </div>
    
    )
  }
}

export default login