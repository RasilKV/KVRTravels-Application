import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../styles/userlist.css'
import PersonIcon from '@mui/icons-material/Person';

const UserList = () => {
  let [data, setData] = useState([])
  useEffect ( ()=>{
    axios.get('http://localhost:8080/users')
    .then((res)=>{
      console.log("user list")
      setData(res.data.data)
    })
    .catch((err)=>{
      console.log("something went wrong")
    })
  },[])
  return (
    <div className='user-list-bg'>
      {/* <div className='btn'> */}
        {/* <button className='view-btn' onClick={list}>Click Here To View Users</button> */}
      {/* </div> */}
      <div className='user-list'>
        {data.map((x)=>{
          return(
            <div className='user-details'>
              <PersonIcon id='mui4'  />
              <p>Name<h4>{x.name}</h4></p>
              <p>Date of birth<h4>{x.date}</h4></p>
              <p>Phone number<h4>{x.phone}</h4></p>
              <p>Email<h4>{x.email}</h4></p>
              <p>Adhar number<h4>{x.adhar}</h4></p>
              <button className='delete-btn'>Delete</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default UserList