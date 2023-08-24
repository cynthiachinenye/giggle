import React from 'react'
import contact from '../Asset/pexels-photo-4.jpeg'
import '../Styles/Contact.css'
function Contact() {
  return (
    <div className="contact">
    <div className="leftSide" style={{backgroundImage:`url(${contact})`}}></div>
    <div className="rightSide">
      <h1>Contact Us</h1>


     
      <form id="contact-form" method="POST">
         <label htmlFor="name"> Full Name</label>
         <input name="name" placeholder='Enter Full Name..' type='text' />
         <label htmlFor="email">Email</label>
         <input email="email" placeholder="Enter email.." type='email'/>
         <label htmllFor="message">Message</label>
         <textarea row="6" placeholder="Enter Your Message..." name="message"required></textarea>
         <button type="submit">Send Message</button>
      
      </form>
     
    </div>
      
    </div>
  )
}

export default Contact
