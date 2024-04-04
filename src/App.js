import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MeetGreet from './Pages/MeetGreet';
import Homepage from './components/Homepage';
import CreateMeet from './Pages/CreateEvents/CreateMeet';
import CreateAccount from './SignuPages/CreateAccount';
import EmailLogin from './SignuPages/Loginpages/EmailLogin';


function App() {
 

  return (
    <Router>
    <Routes>
      <Route path='/' element={<CreateAccount />} />
      <Route path='/emaillogin' element={<EmailLogin />} />
      <Route path='/homepage' element={<Homepage />} />

        <Route path="/meetgreet/:meetgreetId" element={<MeetGreet />} />
        <Route path="/createmeet" element={<CreateMeet />} />
    
    </Routes>
   
    </Router>
  );
}

export default App;
