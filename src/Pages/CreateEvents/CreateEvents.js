import React from 'react'
import ImageUpload from './ImageUpload'

const CreateEvents = () => {
 
  return (
 <section style={{justifyContent: 'center', alignItems: 'center', display: 'flex', fontFamily: "Montserrat, sans-serif"}}>
      <div style={{width: '48%', display: 'flex', flexDirection: 'column'}}>
     <div>
     <h1 style={{fontWeight: 600, fontSize: 32, marginBottom: 0}}>Create a meet up</h1>
      <h2 style={{marginTop: 38, fontWeight: 500, fontSize: 24, color: '#000000'}}>What’s the name of your event?</h2>
      <p style={{fontWeight: 400, fontSize: 14}}>This will be your event’s title. Your title will be used to help create your event’s summary, description, category, and tags – so be specific!</p>
      <input 
      type='text'
      style={{width: '92%', height: 25, padding: '20px', fontWeight: 400, fontSize: 14, border: '0.6px solid #D9D9D9'}}
      placeholder='Event Title'/>
     </div>
     <div>
     <h1 style={{fontWeight: 500, fontSize: 24}}>When does your event start and end?</h1>
     <div style={{width: '95%', display: 'flex', gap: 20}}>
     <input
      style={{width: '30%', height: 22, padding: 21, border: '0.6px solid #D9D9D9',  fontWeight: 400, fontSize: 14,}}
      type='text'
      placeholder='Date' 
      />
      <input
      style={{width: '30%', height: 22, padding: 21, border: '0.6px solid #D9D9D9', fontWeight: 400, fontSize: 14,}}
      placeholder='Time' 
      />
      <input
      style={{width: '30%', height: 22, padding: 21, border: '0.6px solid #D9D9D9',  fontWeight: 400, fontSize: 14,}}
      placeholder='End Time' 
      />
     </div>
     </div>
      <div>
      <h1 style={{fontWeight: 500, fontSize: 24, color: '#000000'}}>Where is it located?</h1>
      <input 
            style={{width: '92%', height: 25, padding: '20px', fontWeight: 400, fontSize: 14, border: '0.6px solid #D9D9D9'}}

      placeholder='Add Location'
      />
      </div>
      <div>
      <h1 style={{fontWeight: 500, fontSize: 24, color: '#000000'}}>How much do you want to charge for tickets?</h1>
      <p style={{fontWeight: 400, fontSize: 14}}>You can edit and add more ticket types later.</p>
      <input 
            style={{width: '30%', height: 22, padding: 21, border: '0.6px solid #D9D9D9',  fontWeight: 400, fontSize: 14,}}

      placeholder='Enter Price'
      />
      </div>
     <div>
     <h1 style={{fontWeight: 500, fontSize: 24, color: '#000000'}}>What's the capacity for your event?</h1>
      <p style={{fontWeight: 400, fontSize: 14}}>Event capacity is the total number of tickets you're willing to sell.</p>
      <input
                  style={{width: '30%', height: 22, padding: 21, border: '0.6px solid #D9D9D9',  fontWeight: 400, fontSize: 14,}}
 
      placeholder='Enter Total Capacity'
      />
     </div>
      <div>
      <h1 style={{fontWeight: 500, fontSize: 24, color: '#000000'}}>Add Tags to the event</h1>
      <select style={{width: '30%', height: 60, padding: '10px', border: '0.6px solid #D9D9D9', }}
>
  <option value="option1">Add Tags</option>
  <option value="option2">Option 2</option>
  <option value="option3">Option 3</option>
</select>
      </div>
    <ImageUpload />
     <button style={{width: '35%', marginLeft: 308, height: 56, borderRadius: 6, background: '#3D37F1', color: 'white', marginTop: 162, border: 'none'}}>Create Event</button>
    </div>
 </section>
    
  )
}

export default CreateEvents
