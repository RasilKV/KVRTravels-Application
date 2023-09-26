import React, { useState } from 'react'
import '../styles/landinghomepage.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const LandingHomePage = () => {

  let [from, setFrom] = useState('')
  let [to, setTo] = useState('')
  let [dop, setDate] = useState('')

  let search = (e)=>{
    axios.get('http://localhost:8080/bus/filter')
    .then((res)=>{
      console.log("success")
    })
    .catch((err)=>{
      console.log("invalid data")
    })
    e.preventDefault();
  }
  return (
    <div className='landing-home-page'>
      <div className="form-bg-img">
        <form action="" id='form-bus-filter'>
          <input type="text" placeholder='from' value={from} onChange={(e)=>{setFrom(e.target.value)}} />
          <input type="text" placeholder='to' value={to} onChange={(e)=>{setTo(e.target.value)}} />
          <input type="date" value={dop} onChange={(e)=>{setDate(e.target.value)}}/>
          <button onClick={search}>Search</button>
        </form>
      </div>
    </div>
  )
}

export default LandingHomePage