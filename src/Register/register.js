import React from 'react'
import './register.css'
const register = () => {
  
  return (
    <div className="container container-login">
    <div class="wrap">
    <h1 class="register-title">Registration Form</h1>
    <form action="#">
        <div class="register-switch">
            <input type="radio" name="sex" value="F" id="sex_f" class="register-switch-input" checked/>
            <label for="sex_f" class="register-switch-label">Buyer</label>
            <input type="radio" name="sex" value="M" id="sex_m" class="register-switch-input"/>
            <label for="sex_m" class="register-switch-label">Seller</label>
        </div>
        <input type="email" class="register-input" placeholder="Email address"/>
        <input type="password" class="register-input" placeholder="Password"/>
        <input type="address" class="register-input" placeholder="Address"/>
        
        <select id="inputState" class="form-control">
          <option selected>Select State...</option>
          <option>Maharashtra</option>
          <option>Delhi</option>
          <option>Karnataka</option>

        </select>
        <select id="inputCity" class="form-control">
          <option selected>Select City...</option>
          <option>Mumbai</option>
          <option>Pune</option>
          <option>Palghar</option>

        </select>
        <input type="submit" value="Registration" class="register-button"/>
    </form>
</div>
</div>
  )
}

export default register