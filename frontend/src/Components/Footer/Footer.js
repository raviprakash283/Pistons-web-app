import React from 'react'
import "./Footer.css"

import message from "../../assets/message.png"
import fb from "../../assets/facebook.png"
import ig from "../../assets/instagram.png"
import twitter from "../../assets/twitter.png"
import youtube from "../../assets/youtube.png"
import  stay from "../../assets/Group 3.png"
import pistons from "../../assets/PISTONS.png"

const Footer = () => {
  return (
    <div>

<footer id="footer">
      <div className="leftFooter">
       
      </div>

      <div className="midFooter">

        <div>
            <img src={pistons} alt="pistons" />
        </div>

        <div>

              
              <h1>STAY CONNECTED</h1>
        </div>

        <div className='brands'>
        <img src={fb} alt="fb" />
      <img src={youtube} alt="youtube" />
      <img src={ig} alt="insta" />
      <img src={twitter} alt="twitter" />
      <img src={message} alt="message" />
       
        </div>


      
      </div>

      <div className="rightFooter">
       
      </div>
    </footer>




    </div>
  )
}

export default Footer
