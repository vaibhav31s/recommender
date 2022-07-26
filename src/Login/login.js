import React, { Component } from "react";
import "./login.css";
export class login extends Component {
  render() {
    return (
        <div className="container container-login">
            <div class="wrap">
            <h1 class="register-title">Welcome</h1>
            <form action="#">
                <div class="register-switch">
                    <input type="radio" name="sex" value="F" id="sex_f" class="register-switch-input" checked/>
                    <label for="sex_f" class="register-switch-label">Buyer</label>
                    <input type="radio" name="sex" value="M" id="sex_m" class="register-switch-input"/>
                    <label for="sex_m" class="register-switch-label">Seller</label>
                </div>
                <input type="email" class="register-input" placeholder="Email address"/>
                <input type="password" class="register-input" placeholder="Password"/>
                <input type="submit" value="Login" class="register-button"/>
            </form>
        </div>
        </div>
    );
  }
}

export default login;
