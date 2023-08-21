import React from 'react'
import Logo from '../Asset/pizza-logo-removebg-preview.png'
import {Link} from 'react-router-dom'
import '../Styles/Navbar.css'
function Navbar() {
  return (
    <div className="navbar">
      
      <div className='leftside'>
          <img src = {Logo}/>
         
      </div>
      
      <div className='rightside'>
       <Link to='/'> Home</Link>
       <Link to='menu'>Menu</Link>
       <Link to='about'> About Us</Link>
       <Link to='contact'> Contact</Link>
      </div>
      
    </div>
  )
}

export default Navbar
