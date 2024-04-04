import React from 'react'
import { Link } from 'react-router-dom'
const EmailLogin = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center',}}>
      
     <div style={{alignItems: 'center', display: 'flex', flexDirection: 'column', width: 432,  marginTop: 58,  fontFamily: 'DM Sans, sans-serif'}}>
     <h1 style={{marginBottom: 0, fontWeight: 500, fontSize: 24}}>Log In</h1>
      <p style={{marginTop: 12, fontWeight: 400, fontSize: 14}}>Already a member yet? <span>Sign UP</span></p>
     <div style={{width: '100%'}}>
     <input
    
     className='placeholder-style'
    style={{
        height: 45,
        marginTop: 11,
        width: '100%',
        
        borderRadius: '5px',
        border: '0.56px solid #D9D9D9',
        fontSize: '16px',
       
    }}
    placeholder='Email Address' 
/>

   
     </div>
     <div  style={{width: '100%'}}>
     <input
    
     className='placeholder-style'
    style={{
        height: 45,
        marginTop: 11,
        
        width: '100%',
        
        backgroundSize: '22px 22px', // Adjust the size of the image
        borderRadius: '5px',
        border: '0.56px solid #D9D9D9',
        fontSize: '16px',
       
    }}
    placeholder='Password' 
/>

   
     </div>
     
     <button style={{width: '100%', height: 45, background: '#2539ED', borderRadius: 2.5, marginTop: 30, border: 'none', color: 'white', cursor: 'pointer'}}><Link style={{color: 'white', textDecoration: 'none'}} to='/homepage'>Log In</Link></button>

     
       <div style={{borderBottom: '1px solid #756868', display: 'flex', justifyContent: 'center', marginTop: 53, width: '100%'}}><button style={{marginBottom: -10, width: 42, height: 18, borderRadius: 6, border: '0.56px solid #D9D9D9', background: '#FFFFFF'}}>Or</button></div>

       <div style={{width: '100%', marginTop: 37}}>
     <input
    
     className='placeholder-title'
    style={{
        cursor: 'pointer',
        height: 45,
        marginTop: 11,
        width: '100%',
        position: 'relative',
        backgroundImage: 'url("Vector (1).png")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '16px',
        backgroundSize: '11.57px 12.17px', // Adjust the size of the image
        borderRadius: '5px',
        border: '0.56px solid #D9D9D9',
        fontSize: '16px',
        outline: 'none',
    }}
    placeholder='Log in with Facebook' 
/>

   
     </div>
     <div  style={{width: '100%'}}>
     <input
    
     className='placeholder-title'
    style={{
        cursor: 'pointer',
        height: 45,
        marginTop: 11,
        position: 'relative',
        width: '100%',
        backgroundImage: 'url("flat-color-icons_google.png")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '16px',
        backgroundSize: '22px 22px', // Adjust the size of the image
        borderRadius: '5px',
        border: '0.56px solid #D9D9D9',
        fontSize: '16px',
        outline: 'none',
    }}
    placeholder='Log in with Google' 
/>

   
     </div>
     <div  style={{width: '100%'}}>
     <input
    
     className='placeholder-title'
    style={{
        cursor: 'pointer',
        marginTop: 11,
        width: '100%',
        height: 45,
        position: 'relative',
        backgroundImage: 'url("basil_apple-solid.png")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '16px',
        backgroundSize: '24px 24px', // Adjust the size of the image
        borderRadius: '5px',
        border: '0.56px solid #D9D9D9',
        fontSize: '16px',
        outline: 'none',
    }}
    placeholder='Log in with Apple' 
/>

   
     </div>
     </div>
    </div>
  )
}

export default EmailLogin
