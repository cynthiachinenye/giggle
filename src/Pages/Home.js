import React from 'react'
import { Link } from 'react-router-dom'
import BannerImage from '../Asset/pexels-photo-7902939.jpeg'
import '../Styles/Home.css'

function Home() {
  return (
    <div className='home' style={{backgroundImage: `url( ${BannerImage})`}}>
       
      <div className="headerContainer" >
          <h1>Cyndy's Pizzeria</h1>
          <p> PIZZA TO FIT ANY TASTE</p>
      
          <Link to='/menu'>
          <button>ORDER NOW</button>
          </Link>
         
          </div>
             
    </div>
  )
}

export default Home
