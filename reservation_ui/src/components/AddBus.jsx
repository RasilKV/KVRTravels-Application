import axios from 'axios'
import React, { useState } from 'react'
import '../styles/addbus.css'

const AddBus = () => {
  let [name, setName] = useState("")
  let [bus_no, setBus_no] = useState("")
  let [nos, setNos] = useState("")
  let [from, setFrom] = useState("")
  let [to, setTo] = useState("")
  let [dop, setDop] = useState("")
  let data = {name, bus_no, nos, from, to, dop}
  let admin = JSON.parse(localStorage.getItem('admin'))
  let addBus = (e)=>{
    axios.post(`http://localhost:8080/bus/${admin.id}`, data).then((res)=>{
      alert(res.data.message)
    }).catch((err)=>{
      alert("cannot add bus")
    })
    e.preventDefault();
  }
  return (
    <div className='add-bus'>
      <form action="">
        <br />
        <input type="text" placeholder='Bus Name' value={name} onChange={(e)=>{setName(e.target.value)}} />
        <br /><br />
        <input type="text" placeholder='Bus Number' value={bus_no} onChange={(e)=>{setBus_no(e.target.value)}} />
        <br /><br />
        <input type="text" placeholder='from location' value={from} onChange={(e)=>{setFrom(e.target.value)}}/>
        <br /><br />
        <input type="text" placeholder='to location' value={to} onChange={(e)=>{setTo(e.target.value)}} />
        <br /><br />
        <input type="date" placeholder='date of departure' value={dop} onChange={(e)=>{setDop(e.target.value)}} />
        <br /><br />
        <input type="number" placeholder='number of seats' value={nos} onChange={(e)=>{setNos(e.target.value)}} />
        <br /><br />
        <button onClick={addBus}>Add Bus</button>
      </form>
      
    </div>
  )
}

export default AddBus