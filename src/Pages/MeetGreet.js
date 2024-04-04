import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../api/data'; // Import your data array
import Header from './Header';
import JJWorldwide from './JJWorldwide';
import Footer from '../components/Footer';

const MeetGreet = () => {
  const { meetgreetId } = useParams();


  if (meetgreetId === '1') {
    const item = data.find(item => item.id === parseInt(meetgreetId));

    return (
      <div>
        <Header />
        <JJWorldwide />
        <Footer />
      </div>
    );
  } else {
    return null;
  
  }
};

export default MeetGreet;
