
import React from 'react'
import Style from '../Loader/Loade.module.css'


export default function Loder(){
    return(
        <>
            <main className={Style.flex}>
                <div>
                    <div className={Style.loader}></div>
                    <h4>Loading...</h4>
                </div>
            </main>
       
       
        </>
    )
}


