import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/adminnavlinks.css'

const AdminNavLinks = () => {
  return (
    <div className='admin-nav-links'>
      <Link className='user-list' to="/adminhomepage/userlist">User List</Link>
      <Link to="/adminhomepage/reservations">Reservations</Link>
      <Link to="/adminhomepage/addbus">Add Bus</Link>
    </div>
  )
}

export default AdminNavLinks