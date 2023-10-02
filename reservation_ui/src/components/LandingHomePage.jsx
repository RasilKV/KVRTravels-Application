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
              <img src="https://static.abhibus.com/busgallery/offerbanners/Apr2023/28/1682666896/OrangefcTravels.png" alt="" />
              <h1>{x.name}</h1>
              <p>Depart at: <h4>{x.from}</h4></p>
              <p>Date of Departure: <h4>{x.dop}</h4></p>
              <p>Depart Time: <h4>{x.dep_time}</h4></p>
              <p>Duration: <h4>5:15</h4></p>
              <p>Arrive Time: <h4>{x.arrive_time}</h4></p>
              <p>Destination: <h4>{x.to}</h4></p>
              <p>Available Seats: <h4 id="seats">{x.nos}</h4></p>
              <button className='select-bus'>Select Bus</button>
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