import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/login.css'
import axios from 'axios'

const AdminLogin = () => {
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
  let navigate = useNavigate();
  let login=(e)=>{
    axios.post(`http://localhost:8080/admins/verify-by-email?email=${email}&password=${password}`)
    .then((res)=>{
      localStorage.setItem("admin", JSON.stringify(res.data.data))
      alert("admin verified");
      navigate('/adminhomepage')
    })
    .catch((err)=>{
      alert("Invalid email or password")
    })
    e.preventDefault();
  }
  return (
    <div className='admin-login-background'>
      <div className='admin-login'>
        <form action="">
          <br />
          <input type="email" placeholder='Enter Admin email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
          <br /><br />
          <input type="password" placeholder='Enter Admin password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
          <br /><br />
          <button id='admin-login-btn' onClick={login}>Login</button>
          <p>Click here to register the <Link to={'/adminregister'}>Admin</Link></p>
        </form>
      </div>
    </div>
  )
}

export default AdminLogin