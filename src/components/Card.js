import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({id, img, month, date, title, description }) => {

  return (
    
    <div>
    <main>
      <section style={{}}>
        <div style={{ boxShadow: '0 0 42.127071380615234px 0 rgba(119, 115, 170, 0.1)', borderRadius: 16.85 }}>
          <img style={{ width: '100%' }} src={img} alt='' />
          <div style={{ display: 'flex' }}>
            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 25.36, marginTop: 12, alignItems: 'center' }}>
              <span style={{ display: 'inline-flex', width: 23, fontWeight: 700, fontSize: 10.11, color: '#3D37F1', height: 13.48, marginBottom: 0, fontFamily: 'DM Sans, sans-serif' }}>{month}</span>
              <h1 style={{ display: 'inline-flex', fontWeight: 700, fontSize: 25, height: 33, width: 33, fontFamily: 'DM Sans, sans-serif', marginTop: -5 }}>{date}</h1>
            </div>
            <div style={{ marginLeft: 11, marginTop: 10 }}>
            <Link style={{textDecoration: 'none', color: '#000000'}} to={`/meetgreet/${id}`}>
        <h1 style={{ fontFamily: 'DM Sans, sans-serif', marginTop: 0, marginBottom: 0, fontWeight: 700, fontSize: 14, width: 214.85, height: 40 }}>
          {title}
        </h1>
      </Link>

        <p style={{ fontFamily: 'DM Sans, sans-serif', marginTop: 8, fontWeight: 400, fontSize: 12.45, color: '#6A6A6A', width: 214.85, height: 35 }}>{description}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
  
  
  )
}

export default Card
