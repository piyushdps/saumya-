import React, { useEffect } from "react";
import "./register.css";

function Register({registered,setregistered,registerData,setRegisterData}) {

  const handleRegister  =(e) =>{
    e.preventDefault();
    
    let  data = localStorage.getItem('register')
  if(data){
    data = JSON.parse(data)
    data.push(registerData)
    localStorage.setItem('register',JSON.stringify(data));
}else{
  data = []
  data.push(registerData)
  localStorage.setItem('register', JSON.stringify(data));
}
setregistered(true)
  }


 


useEffect(() => {
 
  console.log( JSON.parse (localStorage.getItem('register')))



}, [registerData])
    return (
        <div className="login">
          <h4>Register</h4>
        <div className="loginWrapper">
         
          <div className="loginRight">
            <form className="loginBox" onSubmit={handleRegister}>
            <input
                placeholder="Name"
                type="text"
                
                onChange={e=>{setRegisterData({...registerData, name:e.target.value})}}
                className="loginInput"
              />
              <input
                placeholder="Email"
                type="email"
                
                onChange={e=>{setRegisterData({...registerData, email:e.target.value})}}
                className="loginInput"
              />
              <input
                placeholder="Password"
                type="password"
                
                onChange={e=>{setRegisterData({...registerData, password:e.target.value})}}
                className="loginInput"
              />
              <input
                placeholder="Phone Number"
                type="Number"
                
                onChange={e=>{setRegisterData({...registerData, mobile:e.target.value})}}
                className="loginInput"
              />
              <select
                placeholder="Profession"
                type="select"
                defaultValue='Select Profession'
                onChange={e=>{setRegisterData({...registerData, profession:e.target.value})}}
                className="loginInput"
              >
<option disabled >Select Profession</option>
<option>Student</option>
<option>Professional</option>

              </select>
              <button className="loginButton" type="submit" >
                Sign up
              </button>
              </form>
              {registered? <h5 style={{textAlign:'center'}}>User registered successfully</h5>: <></>}

              {/* <button className="loginRegisterButton" disabled={registered?true:false}>
              Log into Account
              </button> */}
      
          </div>
        </div>
      </div>
    )
}

export default Register
