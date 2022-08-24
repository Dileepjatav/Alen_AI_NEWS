import React from 'react'
import { News } from './News'

export const Main = (props) => {
    

    
  return (
    <>  
        <div>
            { true?<News></News>:false}
            <div>

            </div>

        </div>

        <div>
           
            <div className='newsbox' >
           
            
            
            { props.news!==undefined ?  props.news.map((ele,i)=>(

                                       <div className='newscard' key={i} >
                                            <img src={ele.urlToImage} alt={i} className='card_img' ></img>
                                            <div className='card_info'>
                                                <h3>{ele.title}</h3>
                                                <p>{ele.description}</p>
                                                <div className='card_more'>
                                                    <a href={ele.url} target='_blank'  rel="noreferrer" >Read more...</a>
                                                    <h6 style={{color:'black'}} >Publish on {new Date(ele.publishedAt).toDateString()}</h6>

                                                </div>

                                               
                                                
                                            </div>
                                            <h5>{}</h5>
                                                                                        
                                        </div>))
                      :   false
            }
                    
            
            

        
        </div>
       


        </div>
         
        
    
    
    </>
  )
}
