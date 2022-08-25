import React from 'react'
import { NavLink } from 'react-router-dom'


export const Navbar = (props) => {
  let top_headline=`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${props.api_key}`;
  let sport=`https://newsapi.org/v2/top-headlines?category=sports&apiKey=${props.api_key}`;
  let science=`https://newsapi.org/v2/top-headlines?category=science&apiKey=${props.api_key}`;
  
  return (
    <>
    <div className='flex navbar' >
        <div className='app_name'>
          <h3  >Alen <span>AI</span>  NEWS & WEATHER</h3>
          
        </div>
        
        <ul className='flex navlist' >
            <li> <NavLink to='./' >Home</NavLink></li>
            <li><NavLink to='./about'>About</NavLink></li>
            <li  onClick={()=>{props.setapi(top_headline);props.setresult("Top headline")}}><NavLink to='./'>Top headline</NavLink></li>
            <li onClick={()=>{props.setapi(sport);props.setresult("Sport")}} > <NavLink to='./'>Sport</NavLink></li>
            <li onClick={()=>{props.setapi(science);props.setresult("Science")}} ><NavLink to='./'>Science</NavLink></li>
            <li><NavLink to='./contactus'>Contact us</NavLink></li>
            
        </ul>

    </div>

    
    
    </>
    
  )
}
