import React,{useEffect,useState} from 'react'
import "./Lowerbody.css"

import im from "../../assets/Frame 31.png"
import krk from "../../assets/krk.png"
import fmn from "../../assets/Frame 9.png"

const A = () => {
  return (
    <div>
    <div className='ik'> 

          <div className='ii'>

               <img src={im}/>

         </div>
    </div>
    </div>
   
  )
}

const B= () => {
    
    return (
     <div>

        <div className='ik'>

              <div className='ib'>
           
                   <img src={krk} alt="krk" />
          
               </div>

            <div className='ib'>
           
                 <img src={fmn} alt="krk" />
          
            </div>



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
  
     
      window.addEventListener('resize', handleResize);
  
    
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    return isMobile ? <B /> : <A />;
  };
  
  export default LowerBody;