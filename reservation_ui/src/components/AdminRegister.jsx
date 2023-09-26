import React, { useState } from 'react'
import '../styles/register.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminRegister = () => {
let [name,setName] = useState("")
let [gst,setGst] = useState("")
let [phone,setPhone] = useState("")
let [email,setEmail] = useState("")
let [adhar,setAdhar] = useState("")
let [password,setPassword] = useState("")
let data = {name, gst, phone, email, adhar, password}
let handleSubmit = (e)=>{
  axios.post('http://localhost:8080/admins', data)
  .then((res) => { 
    //alert("Admin Added Successfully")
    toast.success("Admin Added Successfully")
  })
  .catch((err) => {
    //alert("Invalid Data")
    toast.error("Invalid Data")
  })
  e.preventDefault();
}
  return (
    <div className="admin-register-background">
      <ToastContainer/>
      <div className='admin-register'>
        <form action="">
          <br />
          <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Admin name' />
          <br /><br />
          <input type="tel" value={phone} onChange={(e)=>{setPhone(e.target.value)}} placeholder='Admin phone number' />
          <br /><br />
          <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Admin email' />
          <br /><br />
          <input type="tel" value={adhar} onChange={(e)=>{setAdhar(e.target.value)}} placeholder='Admin adhar number' />
          <br /><br />
          <input type='text' value={gst} onChange={(e)=>{setGst(e.target.value)}} placeholder='GST' />
          <br /><br />
          <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Admin password' />
          <br /><br />
          <button id='admin-register-btn' onClick={handleSubmit}>Register</button>
        </form>
      </div>
    </div>
  )
}

export default AdminRegister