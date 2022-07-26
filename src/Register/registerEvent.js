import React from 'react'

const SubmitEvent = () => {
  return (
    <div>SubmitEvent</div>
  )
}

export default SubmitEvent

const submit_registration = ()=>{
    const email = localStorage.getItem("b_email");
    const password = localStorage.getItem("b_password");
    const address = localStorage.getItem("b_address")
    const state = localStorage.getItem("b_state")
    const city = localStorage.getItem("b_city")
    const pincode = localStorage.getItem("b_pincodes")

    const userData = {
        email: email,
        password: password,
        address : address,
        state : state,
        city : city,
        pincode: pincode
    }
    const url = "backend_url" + "/login";
    fetch(url, {})
    .then((response)=>response.json())
    .then((data)=>{
        //users data Received!!!!
    })
}

export {submit_registration};
