import React, { useState, useEffect } from 'react';
import CreateRoom from './CreateRoom';
import RoomList from './RoomList';
import VideoChat from './VideoChat';
import { authenticateWithGmail } from '../services/auth';
import { turnServerConfig } from '../services/twilio';

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const handleAuthentication = async () => {
      try {
        const userinfo = await authenticateWithGmail();
        setAuthenticated(true);
        setUserName(userinfo.email);
      } catch (error) {
        console.error('Error authenticating with Gmail:', error);
      }
    };
    handleAuthentication();
  }, []);

  return (
    <div>
      {authenticated ? (
        <div>
          <h1>Welcome, {userName}!</h1>
          <CreateRoom />
          <RoomList />
          <VideoChat />
        </div>
      ) : (
        <div>
          <h1>Please authenticate with Gmail to continue.</h1>
        </div>
      )}
    </div>
  );
};

export default App;