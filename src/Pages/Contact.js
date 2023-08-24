import React from 'react'
import contact from '../Asset/pexels-photo-4.jpeg'

function Contact() {
  return (
    <div className="contact">
    <div className="contactImage" style={{backgroundImage:`url(${contact})`}}></div>
    <div className="contactInfo">
      <h1>Contact Us</h1>


      <div clasName="formPage">
      <form id="contact-form" method="POST">
         <label htmlFor="name"> Full Name</label>
         <input />
      
      </form>
      </div>
    </div>
      
    </div>
  )
}

export default Contact
