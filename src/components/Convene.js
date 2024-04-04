import React from 'react'

const Convene = () => {
    return (
        <div  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className='convene-bac-img' style={{ backgroundColor: '#EEE1FF', height: 226.45, marginTop: 181, position: 'relative', display: 'flex', justifyContent: 'space-between' }}>
            <div>
                <img
                    style={{ position: 'absolute', bottom: 0, height: 272.28, marginLeft: 89 }}
                    src='image 3.png'
                    alt=''
                />
            </div>
            <div className='convene-join-con' style={{ marginTop: 31, fontFamily: 'DM Sans, sans-serif', marginRight: 75, }}>
                <h1 className='convene-title' style={{ fontWeight: 700, fontSize: 30.55 }}>Join Convene</h1>
                <p className='convene-para' style={{ width: '100%', marginBottom: 0, marginTop: 0,fontSize: 16.18, fontWeight: 400, color: '#272727' }}>Convene assists meetup organisers in prioritising questions to be answered by allowing users to vote on them</p>
                <button style={{ width: 271.38, marginTop: 8, height: 53, borderRadius: 44.93, background: '#2539ED', border: 'none', color: 'white' }}>Sign Up</button>
            </div>
        </div>

        
    </div>
    )
}


export default Convene
