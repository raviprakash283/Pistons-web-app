import React , {useState, useEffect}from 'react'
import "./Testimonials.css"
import axios from "axios";



import img1 from "../../assets/Frame 24.png"
import img2 from "../../assets/Frame 26.png"
import img3 from "../../assets/Frame 27.png"
import img4 from "../../assets/Frame 28.png"




const Testimonials = () => {

 


  //   const url = 'test-api/testimonials.json';
    


  //   const [data, setData] = useState([]);
  
    
  //   fetch('https://elitefit4you.com/test-api/testimonials.json')
  // .then((response) => {
  //   if (!response.ok) {
  //     throw new Error('Network response was not ok');
  //   }
  //   return response.json();
  // })
  // .then((data) => {
  //   console.log(data);
  // })
  // .catch((error) => {
  //   console.error('Error fetching data:', error);
  // });

     
  //   useEffect(() => {
      
  //   }, []);
    


     const a= "I stumbled upon this shop, and their selection blew me away. The user-friendly website made my shopping experience a breeze!";
     const b= "The checkout process was seamless, and the responsive design worked flawlessly on my mobile device. I'll definitely be coming back!"
     const c= "Their site's intuitive navigation made finding the perfect pen a joy. Five stars for both their products and web design!"
     const d= "I appreciate the attention to detail in both their pens and website. A visually stunning and user-focused online shop.";

  return (
    <div className='container' >
          <div className='txt-cont'>
             
                  <h1 style={{color:'black'}}>TESTIMONIALS</h1>
             
          </div>
               
          <div className='img-cont'> 

          

                  <div className='img-cont-2'>  
                           <img src={img1} alt="img" />
                      <div className="overlay">
                             <p>{a}</p>
                      </div>
                  </div>

                 <div  className='img-cont-2' > 
                            <img src={img2} alt="img" />
                      <div className="overlay">
                                <p>{b}</p>
                      </div>
                  </div>

                 <div  className='img-cont-2'> 
                       <img src={img3} alt="img" />
                       <div className="overlay">
                               <p>{c}</p>
                      </div>
                 </div>

                 <div  className='img-cont-2' >  
                           <img src={img4} alt="img" />
                           <div className="overlay">
                               <p>{d}</p>
                           </div>
                        
                 </div> 

             
          
        
            
            
          </div>

          </div>
    
  )
}

export default Testimonials