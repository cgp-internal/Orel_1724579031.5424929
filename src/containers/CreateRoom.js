import React, { useState } from 'react';
import { createRoom } from '../services/room';

const CreateRoom = () => {
  const [roomName, setRoomName] = useState('');
  const [createdBy, setCreatedBy] = useState('');

  const handleRoomNameChange = (event) => {
    setRoomName(event.target.value);
  };

  const handleCreatedByChange = (event) => {
    setCreatedBy(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await createRoom(roomName, createdBy);
      alert(`Room created successfully!`);
    } catch (error) {
      alert(`Error creating room: ${error.message}`);
    }
  };

  return (
    <div>
      <h1>Create a New Room</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Room Name:
          <input type="text" value={roomName} onChange={handleRoomNameChange} />
        </label>
        <br />
        <label>
          Created By:
          <input type="text" value={createdBy} onChange={handleCreatedByChange} />
        </label>
        <br />
        <button type="submit">Create Room</button>
      </form>
    </div>
  );
};

export default CreateRoom;