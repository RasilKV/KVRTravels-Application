import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/login.css'
import axios from 'axios'

const UserLogin = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let navigate = useNavigate();
  let login=(e)=>{
    axios.post(`http://localhost:8080/users/verify-by-email?email=${email}&password=${password}`)
    .then((res)=>{
      alert("user verified");
      navigate('/landinguserhomepage');
    })
    .catch((err)=>{
      alert("Invalid email or password")
    })
    e.preventDefault();
  }
  return (
    <div className='user-login-background'>
      <div className='user-login'>
        <form action="">
          <br />
          <input type="email" placeholder='Enter your user email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
          <br /><br />
          <input type="password" placeholder='Enter your password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
          <br /><br />
          <button id='user-login-btn' onClick={login}>Login</button>
          <p>New user ? click here to <Link to={'/userregister'}>Register</Link></p>
          <Link to={'/adminlogin'}>AdminLogin</Link>
        </form>
      </div>
    </div>
  )
}

export default UserLogin