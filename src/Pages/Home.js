import React from 'react'
import { Link } from 'react-router-dom'
import BannerImage from '../Asset/pexels-3.jpeg'
import '../Styles/Home.css'

function Home() {
  return (
    <div className='home'>
       
      <div className="headerContainer" style={{backgroundImage: `url( ${BannerImage})`}}>
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
