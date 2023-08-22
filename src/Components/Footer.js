import React from 'react'
import Instagram from '@mui/icons-material/Instagram'
import Twitter from '@mui/icons-material/Twitter'
import Facebook from '@mui/icons-material/Facebook'
import Whatsapp from '@mui/icons-material/LinkedIn'
import '../Styles/Footer.css'
function Footer() {
  return (
    <div className="footer">
       <div className="socialmedia">
           <Instagram/>
           <Twitter/>
           <Facebook/>
           <Whatsapp/>
         
       </div>
        <p> &copy; 2023 cyndymeng.com</p>
    </div>
  )
}

export default Footer
