import React from 'react'
import { NavLink } from 'react-router-dom'


export const Navbar = (props) => {
  let top_headline=`https://newsdata.io/api/1/news?apikey=${props.free_API}&country=in&category=top`;
  let sport=`https://newsdata.io/api/1/news?apikey=${props.free_API}&country=in&category=sports`;
  let science=`https://newsdata.io/api/1/news?apikey=${props.free_API}&country=in&category=science`;
  
  
  return (
    <>
    <div className='flex navbar' >
        <div className='app_name'>
          <h3  >Alen <span>AI</span> NEWS & WEATHER </h3>
          
        </div>
        <div className='nav_name'  >
        
        <ul className='flex navlist' >
            <li> <NavLink to='./' >Home</NavLink></li>
            <li><NavLink to='./about'>About</NavLink></li>
            <li><NavLink to='./introduction'>Watch</NavLink></li>
            <li  onClick={()=>{props.setapi(top_headline);props.setresult("Top headline")}}><NavLink to='./'>Top headline</NavLink></li>
            <li onClick={()=>{props.setapi(sport);props.setresult("Sport")}} > <NavLink to='./'>Sport</NavLink></li>
            <li onClick={()=>{props.setapi(science);props.setresult("Science")}} ><NavLink to='./'>Science</NavLink></li>
            <li><NavLink to='./contactus'>Contact us</NavLink></li>
            <li><NavLink to='./free'>free</NavLink></li>
            
        </ul>
        </div>

    </div>

    
    
    </>
    
  )
}
