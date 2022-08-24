import React from 'react'
import meme from '../Image/Futuristic.jpeg'
import { Commands } from './Commands'


export const News = () => {
  return (
    <>
     <div style={{width:'100%'}} >
      <img className='img_home' alt='alen ai' src={meme}></img>
      <Commands></Commands>
        
     </div>
  
    
    </>
)
   
}
