import React from 'react'
import "./About.css"
import carsl from "../../assets/carousel gallery.png"

const About = () => {
  return (

            
            <div className="aboutSection" id='hero'>
     
      

      <div className="aboutSectionContainer">

      <div className='ll'>
       

        

          <div className='aboutSectionContainer1'>
            

             <img src={carsl} alt="img" />

          </div>


          <div className="aboutSectionContainer2">

               <h3 >ABOUT PISTONS</h3>
              
              <span>

        Established in 1897, our beloved fountain pen haven, 'PISTONS, has been a haven for pen enthusiasts for generations. With a century-long dedication to fine writing instruments, we've bridged tradition and modernity, offering a curated selection of vintage and contemporary fountain pens. Our little shop, nestled in the heart of town, continues to inspire a love for the art of writing, connecting past and present through the timeless elegance of ink on paper.
              </span>
            
          </div>

          </div>
      </div>
    


    </div>
  )
}

export default About