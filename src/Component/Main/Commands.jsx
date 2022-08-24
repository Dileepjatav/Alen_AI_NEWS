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
            mid:{mid_title:"Business,Entertainment,General,Health ,Science, sport ,TEchnology"},
            try:"Search business ",
            midtitle:"Categories",
            color:"#ECB390"


        },
        {   
            title:"News by Terms",
            mid:{mid_title:"Bitcoin,Playstatic 5,SmartPhone,Donald Trump.. "},
            try:"Whatsup with Play station 5",
            midtitle:"Terms",
            color:"#CEE5D0"

        },

        {   
            title:"News by Source",
            mid:{mid_title:" CNN,Wired,BBC News, Time,IGN,Buzzlead,ABC news"},
            try:"Open CNN",
            midtitle:"Sources",
            color:"C8B6E2"

        },
        
        

    ]
  return (
    <>
        <div  className='News_cmd' >
            
            {cmd.map((ele,i)=>(
                    <div className='Cmd_card' key={i} style={{backgroundColor:ele.color}} >
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

                )
            )}

        </div>
    
    
    </>
  )
}