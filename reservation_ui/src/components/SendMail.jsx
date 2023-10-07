import axios from 'axios'
import React, { useState } from 'react'

const SendMail = () => {
  let [email, setEmail] = useState("")
  let send = (e)=>{
    axios.post(`http://localhost:8080/send?email=${email}`)
    .then((res) => {
      alert("mail sent")
    })
    .catch((err) => {
      alert("Invalid Data")
    })
    e.preventDefault();
  }
  return (
    <div>
      <div>
        <form action="">
          <input type="email" placeholder='Enter email id here' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
          <button onClick={send}>Send Mail</button>
        </form>
      </div>
    </div>
  )
}

export default SendMail