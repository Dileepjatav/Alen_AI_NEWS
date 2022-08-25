import React from 'react'
import call from '../icons/call_FILL0_wght400_GRAD0_opsz48.png'
import home from '../icons/home_pin_FILL0_wght400_GRAD0_opsz48.png'
import mail from '../icons/mail_FILL0_wght400_GRAD0_opsz48.png'



export const Contactus = () => {
  return (
<>

<div class="section" >
       <h2>Contact</h2>
       <div className='contact_list'>
        <i><img src={call} alt=""/>
        <h4>Address</h4>
        <p> Gwalior,India</p>
        
        </i>

        <i><img src={home}  alt=""/>
            <h4>Mobile</h4>
            <p>+918827911136</p>
        </i>

        <i><img src={mail}  alt=""/>
            <h4>Email</h4>
            <p>Dileepkhurana73@gmail.com</p>
        </i>
        </div>

    </div>




    <section class="section">
        <div class="Subscribe">
            <p>Join our Newsletter</p>
            <div class="sub-email">
                <input type="email"  placeholder="Your Email address" required/>
                <button className='btn'  type="button" >Subscribe</button>
            </div>
            
          </div>
    </section>

    
    
</>

)}
