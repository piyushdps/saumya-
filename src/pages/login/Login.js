import React from "react";
import "./login.css";

function Login({loggedIn,setloggedIn,loginData,setloginData}) {


 
 
 
  const handleLogin  =(e) =>{
    e.preventDefault();
    
    let  data = localStorage.getItem('register')
  if(data){
    data = JSON.parse(data)
    data.forEach((o,i) => {
      if(o.email === loginData.email && o.password === loginData.password){
        setloggedIn(true)
        localStorage.setItem('login' , 'true')
      }
    })
    if(loggedIn){
      console.log(data)
    }
 else{
  console.log("Cant login")

 }
   
  }}


    return (
        <div className="login" onSubmit={handleLogin}>
          <h4>Login</h4>
        <div className="loginWrapper">
        
          <div className="loginRight">
            <form className="loginBox">
            <input
                placeholder="Email"
                type="email"
                
                onChange={e=>{setloginData({...loginData, email:e.target.value})}}
                className="loginInput"
              />
              <input
                placeholder="Password"
                type="password"
                
                onChange={e=>{setloginData({...loginData, password:e.target.value})}}
                className="loginInput"
              />
              <button className="loginButton" type="submit">
                Log In
              </button>
              <span className="loginForgot">Forgot Password?</span>
             
            </form>
          </div>
        </div>
      </div>
    )
}

export default Login
