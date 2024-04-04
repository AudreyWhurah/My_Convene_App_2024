import React from 'react'

const Footer = () => {
  return (
    <div className='footer-big-con' style={{marginTop: 333,  background: '#0A075F', paddingTop: 60}}>
     <div className='footer-cont' style={{  display: 'flex',  flexDirection: 'column',color: 'white', margin: 'auto',}}>
      <div className='footer' style={{display: 'flex',  justifyContent: 'space-between'}}>
      <div className='footer-plane-event' style={{display: 'flex', justifyContent: 'space-between', }}>
      <section style={{marginTop: 52}}>
        <p style={{fontWeight: 400, fontSize: 14, width: 333, marginBottom: 0, color: '#F3F3F3' }}>Convene assists meetup organisers in prioritising questions to be answered by allowing users to vote on them</p>
       <div className='logo-links'>
       <a href="https://www.facebook.com">
  <img style={{marginRight: 16}} src="facebook.png" alt=""/>
</a>
<a href="https://www.linkedin.com">
  <img  style={{marginRight: 16}} src="twitter.png" alt=""/>
</a>
<a href="https://www.twitter.com">
  <img src="linkedin.png" alt=""/>
</a>

       </div>
      </section>
      <section style={{ fontFamily: 'DM Sans, sans-serif'}}>
        <h1 style={{fontWeight: 700, fontSize: 18, marginBottom: 0}}>Plan Events</h1>
        <div style={{color: '#F3F3F3', fontSize: 14, fontWeight: 400, marginTop: 24}}>
        <p>Create and Set Up</p>
        <p>Sell Tickets</p>
        <p>Online RSVP</p>
        <p>Online Events</p>
        </div>

      </section>
      </div>

    <div className='convene' style={{ justifyContent: 'space-between', }}>
    <section>
        <h1 style={{fontWeight: 700, fontSize: 18, fontFamily: 'DM Sans, sans-serif', marginBottom: 0}}>Convene</h1>
       <div className='footer-para' style={{color: '#F3F3F3', fontWeight: 400, fontSize: 14, fontFamily: 'DM Sans, sans-serif', }}>
       <p>About Us</p>
        <p>Press</p>
        <p>Contact Us</p>
        <p>Help Center</p>
        <p>How it Works</p>
        <p>Privacy</p>
        <p>Terms</p>
       </div>
        
      </section>
      <section className='input-section'>
        <h1  style={{fontWeight: 700, fontSize: 18, marginBottom: 0}}>Stay In The Loop</h1>
        <p style={{color: '#F3F3F3', fontWeight: 400, fontSize: 14, width: 362, marginTop: 24, marginBottom: 0}}>Join our mailing list to stay in the loop with our newest for Event and concert</p>
        <div className='input-text' style={{marginTop: 20, }}>
            <input
            className='input-field'
            style={{width: '90%', height: 60.79, borderRadius: 45.59, border: 'none', position: 'relative', paddingLeft: 25}}
            placeholder='Enter your email address..'/>
            <button className='footer-button' style={{position: 'absolute', height: 46, width: 149.79, background: '#F5167E', color: 'white', borderRadius: 50, border: 'none',  marginTop: 11, }}>Subscribe Now</button>
        </div>
      </section>
    </div>
      </div>

      <div style={{ borderBottom: '1px solid #4C4D8B', marginTop: 59, width: '100%', marginBottom: 5}}>
      </div>
      <p style={{fontWeight: 400, fontSize: 14, color: '#FEFEFE', justifyContent: 'center', display: 'flex'}}>Copyright © 2024 Omobolanle</p>

     </div>
    </div>
  )
  
}

export default Footer
