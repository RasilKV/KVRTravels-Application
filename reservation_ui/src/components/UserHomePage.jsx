import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingHomePage from './LandingHomePage'

const UserHomePage = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingHomePage/>}/>
      </Routes>
    </div>
  )
}

export default UserHomePage