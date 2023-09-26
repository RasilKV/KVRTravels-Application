import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AdminNavLinks from './AdminNavLinks'
import AddBus from './AddBus'
import UserList from './UserList'
import Reservations from './Reservations'

const AdminHomePage = () => {
  return (
    <div className='admin-home-page'>
      <AdminNavLinks/>
      <Routes>
        <Route path='/addbus' element={<AddBus/>} />
        <Route path='/userlist' element={<UserList/>} />
        <Route path='/reservations' element={<Reservations/>} />
      </Routes>
      
    </div>
  )
}

export default AdminHomePage