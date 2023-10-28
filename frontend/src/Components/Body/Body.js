import React from 'react'

import "./Body.css"

import img1 from "../../assets/Frame 7.png"
import img2 from "../../assets/Frame 8.png"
import img3 from "../../assets/Frame 8 (1).png"
import img4 from "../../assets/Frame 8 (2).png"
import img5 from "../../assets/Frame 12.png"
import img6 from "../../assets/pexels-anete-lusina-5240857 1.png"

const Body = () => {
  return (
    <div className='mn' >
          

          <div  className='img-cont-body'>
           
              <div className='it'>
                      <img src={img1}/>
              </div>

              <div className='it'>
              <img src={img2}/>
                </div>

                <div className='it'>
                <img src={img3}/>
                </div>

                <div className='it'>
                <img src={img4}/>
                </div>

                <div className='it'>
                <img src={img5}/>
                </div>

                <div className='it'>
                <img src={img6}/>
                </div>


          </div>


    </div>
  )
}

export default Body