import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'
import InfoIcon from '@mui/icons-material/Info';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const NavBar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
      <h1 id='kvr'>KVR<span id='travels'>Travels</span></h1>
      </div>
      <div className="options">
        <Link to='/about'><InfoIcon id='mui1'/>About Us</Link>
        <Link to='/contact'><ContactSupportIcon id='mui2'/>Contact Us</Link>
        <Link to='/userlogin'><AccountCircleIcon id='mui3'/>Login</Link>
      </div>
    </div>
  )
}

export default NavBar