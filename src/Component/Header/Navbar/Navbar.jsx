import React from 'react'
import { NavLink } from 'react-router-dom'


export const Navbar = () => {
  
  return (
    <>
    <div className='flex navbar' >
        <h3>Alen AI NEWS APPLICATION</h3>
        <ul className='flex navlist' >
            <li> <NavLink to='./' >Home</NavLink></li>
            <li><NavLink to='./about'>About</NavLink></li>
            <li><a  >Politics</a></li>
            <li><a href='#' >Entertainment</a></li>
            <li><a href='#' >Technology</a></li>
            <li><a href='#' >Society</a></li>
            <li><a href='#' >Travel</a></li>
        </ul>

    </div>

    
    
    </>
    
  )
}
