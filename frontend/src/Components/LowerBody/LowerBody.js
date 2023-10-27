import React,{useEffect,useState} from 'react'
import "./Lowerbody.css"

import im from "../../assets/Frame 31.png"
import krk from "../../assets/krk.png"
import fmn from "../../assets/Frame 9.png"

const A = () => {
  return (
    <div className='ic'> 
          <div className='ii'>

       <img src={im}/>

</div>
    </div>
   
  )
}

const B= () => {
    
    return (
        <div className='ik'>
              <div className='ib'>
           
           <img src={krk} alt="krk" />
           <img src={fmn} alt="fmn" />
         </div>
        </div>
        
    )

}




const LowerBody = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };
  
      // Attach the event listener when the component mounts
      window.addEventListener('resize', handleResize);
  
      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    return isMobile ? <B /> : <A />;
  };
  
  export default LowerBody;