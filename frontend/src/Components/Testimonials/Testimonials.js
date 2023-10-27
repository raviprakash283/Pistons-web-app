import React , {useState, useEffect}from 'react'
import "./Testimonials.css"
import axios from "axios";



import img1 from "../../assets/Frame 24.png"
import img2 from "../../assets/Frame 26.png"
import img3 from "../../assets/Frame 27.png"
import img4 from "../../assets/Frame 28.png"




const Testimonials = () => {

 


    const url = 'https://elitefit4you.com/test-api/testimonials.json';
    


    const [data, setData] = useState([]);
  
    
    const fetchInfo = async () => {
      try {
        // const response = await fetch(url);
        const response = await fetch(url, {
          method: 'GET', 
          mode: 'cors', // Enable CORS
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setData(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

     
    useEffect(() => {
      fetchInfo();
    }, []);
    




  return (
    <div className='container' >
          <div className='txt-cont'>
             
                  <h1 style={{color:'black'}}>TESTIMONIALS</h1>
             
          </div>
               
          <div className='img-cont'> 

      

                 <div>   <img src={img1} alt="img" /></div>

                 <div>  <img src={img2} alt="img" /> </div>

                 <div> <img src={img3} alt="img" /></div>

                 <div>  <img src={img4} alt="img" /></div>
          
        
            
            
          </div>
    </div>
  )
}

export default Testimonials