import React from 'react'


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

        
        
            
        

      </div>

    </div>
    
    
    </>
  )
}
