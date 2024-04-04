import React from 'react'


const SearchInput = () => {
  return (
  <div style={{marginTop: 30, marginLeft: 80}}>
        <div style={{ position: 'relative', width: 274 , }}>
  <input
    style={{
      width: '100%',
      height: 40,
      backgroundImage: 'url("Search icon.png")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '20px',
        backgroundSize: '16px 16px',
      paddingLeft: 50,
      fontWeight: 400,
      fontSize: 16,
      fontFamily: "Montserrat, sans-serif",
      color: '#000000',
      borderRadius: '6px 0 0 6px',
      border: '1px solid #756868', // Specify border as a string with units
    }}
    type="text"
    placeholder="Search events"
  />

</div>
  
  </div>
  
  )
}

export default SearchInput
