import React, { useEffect } from "react";
import CompanyInfo from "./pages/home/CompanyInfo";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";

import Register from './pages/register/Register';

function App() {
  const [registered,setregistered] = React.useState(false)
  const [registerData,setRegisterData] = React.useState({name:'',mobile:'', password:'' , email:'' , profession:''})
  const [loggedIn,setloggedIn] = React.useState(false)
  const [page,setPage] = React.useState("Home")

  const [loginData,setloginData] = React.useState({ password:'' , email:'' })
  
  useEffect(() => {
  if(localStorage.getItem('login') === 'true'){
    setloggedIn(true)

  }
  
  }, [])



  return(<> 
   {loggedIn && <div
  style={{width:"100vw" , backgroundColor:'pink' ,height:'35px' , display:'flex' , flexGrow:1 ,justifyContent:'space-between'}}
  >
    <div>
    <button style={{background:'white', borderRadius:'5px', outline:'none', margin:"5px 10px", border:'none ' , height:'26px'}} onClick={e=>setPage('Home')}>Dashboard</button>
    <button style={{background:'white', borderRadius:'5px', outline:'none', margin:"5px 10px", border:'none ' , height:'26px'}} onClick={e=>setPage('Contact')}>Contact Us</button>
    </div>
    <div>
    <button style={{background:'white', borderRadius:'5px', outline:'none', margin:"5px 10px", border:'none ' , height:'26px'}} onClick={e=>{localStorage.setItem('login','false');window.location.reload();}}>Log out</button>

    </div>
  </div>}
  {!loggedIn ?<>
  <Login  loggedIn={loggedIn} setloggedIn={setloggedIn} loginData={loginData} setloginData={setloginData}/>
  
  <Register registered={registered} setregistered={setregistered} registerData={registerData} setRegisterData={setRegisterData}/>
 </>:
 <>
{page==='Home'?<Home />:
 <CompanyInfo/>}
 
 </> }
  

  
  </>)
}

export default App;
