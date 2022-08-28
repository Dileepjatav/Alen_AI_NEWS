import React from 'react'
import img1 from '../Image/Screenshot (367).png'
import img2 from '../Image/Screenshot (368).png'
import img3 from '../Image/Screenshot (369).png'
import img4 from '../Image/Screenshot (365).png'

export const Introduction = () => {
  return (
    <>
     <div className='intro_container' >
      <div className='about_youtube' >
        <div className='pro_dec' >
            <h3 style={{'margin':' 20px 0' }} >Watch this video to know more about this application</h3>
            <ul style={{'marginLeft':'50px'}} >
                <li> 
                    
                    <h5>Description</h5>
                    <p>it is a  News website user can search News of  any category, Source and Topic </p>
                     
                </li>
                <li><h5>Features</h5>
                    <p>  Search News by Voice command ,Click Read more to get more detailed News , Latest news</p>
                </li>
                <li><h5>Tech stack</h5>
                    <p> HTML, CSS, JavaScript, React, News API, Alen Studio</p>
                </li>
            </ul>



        </div>
        <div className='vid_hed'>
            

            

            <p>Purpose of making this video because The <span>News web Api</span> is not free for Production, 
                Request from browser not allow and return error 426 
            </p>
            <p>And it is working fine on my local host server and  <span> if i want to work well in Online i will need to buy Business Plan of $499 from NEWES API </span></p>

            

        </div>
        
        
        <div className='youtube' >
            
            <iframe width='100%' height="580" src="https://www.youtube.com/embed/8Km-Vm3XbQk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        <h1 id='scimg' >Screen shot of News </h1>
        <div className='img_container' >
            <img src={img4} alt="img1" ></img>
            <img src={img1} alt="img2" ></img>
            <img src={img2}  alt="img3" ></img>
            <img src={img3} alt="img4"></img>
            
        </div>

        
        
            
        

      </div>

    </div>
    
    
    </>
  )
}
