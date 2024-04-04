import React from 'react'
import { Link } from 'react-router-dom'

const SignupAccess = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center',}}>
      
     <div style={{alignItems: 'center', display: 'flex', flexDirection: 'column', width: 432,  marginTop: 58,  fontFamily: 'DM Sans, sans-serif'}}>
     <h1 style={{marginBottom: 0, fontWeight: 500, fontSize: 24}}>Sign Up</h1>
      <p style={{marginTop: 12, fontWeight: 400, fontSize: 14}}>Already a member yet? <span>Log in</span></p>
     <div style={{width: '100%'}}>
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
     <div  style={{width: '100%'}}>
     <Link to='/emaillogin'>
     <input
    
    className='placeholder-title'
   style={{
    height: 45,
    marginTop: 11,
     width: '100%',
       position: 'relative',
       backgroundImage: 'url("mail.png")',
       backgroundRepeat: 'no-repeat',
       backgroundPosition: '16px',
       backgroundSize: '22px 22px', // Adjust the size of the image
       borderRadius: '5px',
       border: '0.56px solid #D9D9D9',
       fontSize: '16px',
       outline: 'none',
       cursor: 'pointer'
   }}
   placeholder='Log in with Email' 
/>
     </Link>

   
     </div>
     </div>
     
    </div>
  )
}

export default SignupAccess
