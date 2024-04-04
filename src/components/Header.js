import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
   <div style={{ height: 104, width: '100%', color: 'black'}}>
<div style={{ display: 'flex', justifyContent: 'space-between', width: '88.89%', alignItems: 'center', marginTop: 24, marginLeft: 80 }}>
      <ul className='header-ul' style={{display: 'flex', listStyleType: 'none',  fontWeight: 500, fontSize: 14}}>
        <li style={{marginRight: 24, }}>Find Events</li>
        <Link to="/createmeet" style={{textDecoration: 'none', color: 'black'}}><li style={{marginRight: 24, }}>Create Events</li></Link>
        <li style={{marginRight: 24}}>Help Center</li>
      </ul>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <h1 style={{fontSize: 16, fontWeight: 600, marginRight: 24, color: '#3D37F1'}}>Login</h1>
      <button style={{background: '#3D37F1', borderRadius: 6, width: 107, color: 'white', border: 'none', borderColor: 'none', height: 56, fontSize: 16, fontWeight: 600}}>Sign up</button>
      </div>
    </div>
   </div>
  )
}

export default Header
