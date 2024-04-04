import React, { useState } from 'react';

const ImageUpload = () => {
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div style={{width: '92%', display: 'flex', gap: 20}}>
      <input
        type="file"
        accept="image/*"
        id="upload"
        onChange={handleImageChange}
        style={{ display: 'none' }}
      />
      <label htmlFor="upload" style={{ cursor: 'pointer', width: '30%', }}>
        <div style={{ height: 165, border: '1px solid #D9D9D9', alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
            <h1 style={{fontWeight: 500, fontSize: 14, fontFamily: '"Inter", sans-seri'}}>Tap to Upload <br/><spand style={{fontWeight: 400, fontSize: 11, color: '#98A2B3'}}>SVG, PNG, JPG, GIF | 10MB max.</spand></h1>
             </div>
      </label>
      <label htmlFor="upload" style={{ cursor: 'pointer', width: '30%', }}>
        <div style={{ height: 165, border: '1px solid #D9D9D9', alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
            <h1 style={{fontWeight: 500, fontSize: 14, fontFamily: '"Inter", sans-seri'}}>Tap to Upload <br/><spand style={{fontWeight: 400, fontSize: 11, color: '#98A2B3'}}>SVG, PNG, JPG, GIF | 10MB max.</spand></h1>
             </div>
      </label>
      <label htmlFor="upload" style={{ cursor: 'pointer', width: '30%', }}>
        <div style={{ height: 165, border: '1px solid #D9D9D9', alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
            <h1 style={{fontWeight: 500, fontSize: 14, fontFamily: '"Inter", sans-seri'}}>Tap to Upload <br/><spand style={{fontWeight: 400, fontSize: 11, color: '#98A2B3'}}>SVG, PNG, JPG, GIF | 10MB max.</spand></h1>
             </div>
      </label>
      
      {imagePreview && (
        <div>
          <img
            src={imagePreview}
            alt="Preview"
            style={{ maxWidth: '100%', maxHeight: '300px' }}
          />
        </div>
      )}
    </div>
  );
};

const CreateEvents = () => {
  return (
    <div>
      <h1 style={{fontWeight: 500, fontSize: 24}}>Add Image Upload</h1>
      {/* Other input fields */}
      <p style={{fontWeight: 400, fontSize: 14}}>Kindly add images below</p>
      <ImageUpload />
      {/* Other input fields */}
    </div>
  );
};

export default CreateEvents;
