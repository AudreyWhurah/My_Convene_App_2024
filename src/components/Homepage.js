import React from 'react'
import Header from './Header'
import Card from './Card'
import Convene from './Convene'
import SearchInput from './SearchInput'
import Section from './Section'
import data from '../api/data'
import Footer from './Footer'
import DynamicComponent from '../Pages/DynamicCcomponent'
import CreateMeet from '../Pages/CreateEvents/CreateMeet'
import CreateAccount from '../SignuPages/CreateAccount'

const Homepage = () => {
    const cards = data.map((item, index) => (
        <Card
           key={index}
          id={item.id}
          img={item.coverImg}
          month={item.month}
          date={item.date}
          title={item.title}
          description={item.description}
        />
      ));
  return (
    <div>
    <Header />
    <SearchInput />
    <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <Section />
    </div>

    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className='card-collection' style={{ width: '88.89%', marginTop: 90, gap: 20 }}>
        {cards}
      </div>
    </div>

    <div style={{ textAlign: 'center' }}>
      <button style={{ width: 182, height: 60, marginTop: 40, borderRadius: 50, fontFamily: 'DM Sans, sans-serif', border: '1.5px solid #3D37F1', fontWeight: 700, fontSize: 18, color: '#3D37F1' }}>Learn More</button>
    </div>

    <Convene />
    <Footer />

   <DynamicComponent />
   
  </div>
  )
}

export default Homepage
