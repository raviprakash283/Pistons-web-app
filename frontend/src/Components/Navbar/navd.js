


import React, { useState } from 'react'
import { Link } from 'react-scroll'

import './navd.css'; // Import your CSS file
import srch from"../../assets/search.jpeg"
import menu from"../../assets/menu.jpeg"




  
  



function Navbar() {
  const [isSearchOpen, setSearchOpen] = useState(false);
 
  
    // 

  const toggleSearch = () => {
    setSearchOpen(!isSearchOpen);
  };

  const [isLinksVisible, setIsLinksVisible] = useState(false);

  const toggleLinks = () => {
    setIsLinksVisible(!isLinksVisible);
  };

  return (
    <div>
    <div className="navbar">
      <div className="logo">PISTONS</div>
         
         <div className='option'>
          <div> <a href="#">NEW</a> </div>
          <div> <a href="#">BRANDS</a> </div>
          <div>  <a href="#">COLLECTIONS</a></div>
          <div> <a href="#">ACCESSORIES</a> </div>
          <div> <Link to="hero"  spy={true} smooth={true} offset={-100} duration={500}> ABOUT</Link> </div>
       

        </div> 
         
        
        <div>
      <div className={`search ${isSearchOpen ? 'open' : ''}`}>
        <input type="text" placeholder="" />
        <button onClick={toggleSearch}>Search</button>
      </div>
           
         

      <button onClick={toggleSearch} className="search-button">
        
         <img className='kk' src={srch}/>
        
         
      </button>

      <button className='icon' onClick={toggleLinks}>
      <img className='kk' src={menu}/>
      </button>



     

      </div>
          
      
      
      
    </div>

    <div className= 'tt'>
             
               
<div id="myLinks" className='mob' style={{ display: isLinksVisible ? 'block' : 'none' }}>
  <div className='aa'>
<div className='txt' id="rk"> <a id='a' href="#">NEW</a>  


</div >
<div className='txt'> <a href="#">BRANDS</a> </div>
<div className='txt'>  <a href="#">COLLECTIONS</a></div>
<div className='txt'> <a href="#">ACCESSORIES</a> </div>
<div className='txt'> <a href="#">ABOUT</a>  </div>
</div>

  </div>
    </div>


</div>
  );
}

export default Navbar;

