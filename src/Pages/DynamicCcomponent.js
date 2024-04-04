import React from 'react';
import { useParams } from 'react-router-dom';
import MeetGreet from './MeetGreet';

const DynamicComponent = () => {
  const { meetgreetId } = useParams();

  // Check if meetgreetId is equal to 1, render MeetGreet component
  if (meetgreetId === '1') {
    return <MeetGreet />;
  }
  // For other IDs, render different components accordingly
  else if (meetgreetId === '2') {
    return null;
  }
  // Add more conditions for other IDs if needed

  // Default case if the ID doesn't match any condition
};

export default DynamicComponent;
