import React from 'react'

export const Commands = () => {

    const cmd=[
        {   
            title:"Latest News",
            mid:{mid_title:"Clear news"},
            try:"Say clear news",
            midtitle:"Remove news",
            color:"#FF8B8B"

        },
        {   
            title:"News by Categories",
            mid:{mid_title:"Business,Entertainment,food,Health ,politics,world"},
            try:"Show Entertainment ,Show Health ,etc",
            midtitle:"Categories",
            color:"#ECB390"
        

        },
        {   
            title:"News by Keyword",
            mid:{mid_title:"Bitcoin,iphone,SmartPhone,Russia. "},
            try:"News of Russia",
            midtitle:"Terms",
            color:"#CEE5D0"

        },

        {   
            title:"Commands",
            mid:{mid_title:" "},
            try:"who are you ,Give me news ,Hi alan i am (Your name)",
            midtitle:"",
            color:"C8B6E2"

        },
        
        

    ]
  return (
    <>
        <div  className='News_cmd' >
            
            {cmd.map((ele,i)=>(
                    <div className='Cmd_card' key={i} style={{backgroundColor:ele.color}} >
                        <div>
                            <h2>{ele.title}</h2>
                            <div>
                                <h5>{ele.midtitle}</h5>
                                <p className='cmd_para' >{ele.mid.mid_title}</p>

                            </div>
                            <div>
                            <h5>Try saying...</h5>
                            <p> {ele.try} </p>

                            </div>
                        </div>

                        
                        

                    </div>

                )
            )}

        </div>
    
    
    </>
  )
}
