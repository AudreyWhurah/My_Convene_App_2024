import React from "react";

const Section = () => {
  return (
    <div className="section" style={{ width: "88.89%", display: "flex", justifyContent: 'space-between', marginTop: 62, }}>
      <section className="layout-cont" style={{ display: "flex", flexDirection: "column",  marginTop: 0,  }}>
        <h1 className="section-title"
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 700,
            
            marginBottom: 0,
            marginTop: 0,
           
          }}
        >
          Your Ultimate Tool for <span style={{ color: "#3D37F1" }}>Organizing</span> and <span style={{ color: "#3D37F1" }}>Prioritizing</span> Questions
        </h1>
        <p className="sect-para" style={{fontFamily: "Montserrat, sans-serif",
            fontWeight: 400,
            color: '#000000',
            marginBottom: 0,
            
            fontSize: 18,}}>Streamline your meetup experience with Convene, the ultimate platform designed to assist you in efficiently managing and prioritizing questions for your events. With our intuitive interface, you can effortlessly gather, organize, and prioritize questions submitted by attendees.</p>
        <button style={{width: 161, borderRadius: 6, background: '#3D37F1', height: 56, marginTop: 20, border: 'none', marginBottom: 0, padding: '16px 24px', color: 'white'}}>Get Started</button>
      </section>
      <div className="sect-img">
        <img className="sec-img" style={{}} src="Frame 54.png" alt="icon" />
      </div>
    </div>
  );
};

export default Section;
