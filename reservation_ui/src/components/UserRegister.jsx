import React, { useState } from 'react'
import '../styles/register.css'
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserRegister = () => {
let [name, setName] = useState("")
let [date, setDate] = useState("")
let [phone, setPhone] = useState("")
let [email, setEmail] = useState("")
let [adhar, setAdhar] = useState("")
let [password, setPassword] = useState("")
let data = {name, date, phone, email, adhar, password}
let handleSubmit = (e)=>{
  axios.post('http://localhost:8080/users', data)
  .then((res) => {
    //alert("User Added Successfully")
    toast.success("User Added Successfully")
  })
  .catch((err) => {
    //alert("Invalid Data")
    toast.error("Invalid Data")
  })
  e.preventDefault();
}
  return (
    <div className='user-register'>
      <ToastContainer/>
      <form action="">
        <br />
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Enter your name' />
        <br /><br />
        <input type="date" value={date} onChange={(e)=>{setDate(e.target.value)}} />
        <br /><br />
        <input type="tel" value={phone} pattern='[0-9]{10}' onChange={(e)=>{setPhone(e.target.value)}} placeholder='Enter your phone number' />
        <br /><br />
        <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Enter your email'/>
        <br /><br />
        <input type="tel" value={adhar} pattern='[0-9]{12}' onChange={(e)=>{setAdhar(e.target.value)}} placeholder='Enter your adhar number' />
        <br /><br />
        <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter your password' />
        <br /><br />
        <button id='user-register-btn' onClick={handleSubmit}>Register</button>
      </form>
    </div>
  )
}

export default UserRegister