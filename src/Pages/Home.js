import React from 'react'
import { Link } from 'react-router-dom'
import BannerImage from '../Asset/pexels-photo-5.jpeg'

function Home() {
  return (
    <div className='home'>
       
      <div className="headerContainer" style={{backgroundImage: `url( ${BannerImage})`}}>
          <h1>Cyndy's Pizzeria</h1>
          <p> PIZZA TO FIT ANY TASTE</p>
      </div>
      <Link to='/menu'>
      <button>ORDER NOW</button>
      </Link>
       
    </div>
  )
}

export default Home
