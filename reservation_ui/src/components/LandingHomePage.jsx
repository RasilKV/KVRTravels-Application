import React, { useState } from 'react'
import '../styles/landinghomepage.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import DashBoard from './DashBoard'

const LandingHomePage = () => {

  let [from, setFrom] = useState('')
  let [to, setTo] = useState('')
  let [dop, setDate] = useState('')
  let [data, setData] = useState([])

  let search = (e)=>{
    axios.get(`http://localhost:8080/bus/filter?from=${from}&to=${to}&dop=${dop}`)
    .then((res)=>{
      console.log("success")
      setData(res.data.data)
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
          <input className='from' type="text" placeholder='from' value={from} onChange={(e)=>{setFrom(e.target.value)}} />
          <input className='to' type="text" placeholder='to' value={to} onChange={(e)=>{setTo(e.target.value)}} />
          <input className='date' type="date" value={dop} onChange={(e)=>{setDate(e.target.value)}}/>
          <button onClick={search}>Search</button>
        </form>
      </div>

      <div className="filtered-bus-lists">
        {data.map((x)=>{
          return(
            <div className="buses">
              <h1>{x.name}</h1>
            </div>
          )
        })}
      </div>

      <div>
        <DashBoard/>
      </div>
    </div>
  )
}

export default LandingHomePage