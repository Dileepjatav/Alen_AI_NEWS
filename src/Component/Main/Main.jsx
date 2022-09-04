import React from 'react'

import { News } from './News'

export const Main = (props) => {
    let res
    if(props.news===undefined){
        res=false
    }else{
        res=true
    }

    

  return (
    <>  
        <div>
            { true?<News></News>:false}
        </div>

        <div>
            {res?<div className='News_box_heading'>
                <h2>{props.result}</h2>
            </div>:false}
            {/* <div className='clear_btn' >
                <button onClick={()=>{props.remove()}}>btn</button>
            </div> */}
            
           
            <div className='newsbox' >
                
           
            
            
            { props.news!==undefined ?  props.news.map((ele,i)=>(

                                       <div className='newscard' key={i} >
                                        
                                             <div className='img_div' >
                                                <img src={ele.image_url} alt={i} className='card_img' ></img>
                                                

                                             </div>
                                             <h5 style={{color:'black'}} >Publish on {new Date(ele.pubDate).toDateString()}</h5>
                                            
                                            <div className='card_info'>
                                                <h3>{ele.title}</h3>
                                                <p>{ele.description}</p>
                                                <div className='card_more'>
                                                    
                                                    <a href={ele.link} target='_blank'  rel="noreferrer" >Read More...</a>
                                                   
                                                    
                                                </div>

                                               
                                                
                                            </div>
                                            <h5>{}</h5>
                                                                                        
                                        </div>))
                      :   false
            }
                    
            
            </div>

        
        </div>

        <hr></hr>
       


        
         
        
    
    
    </>
  )
}
