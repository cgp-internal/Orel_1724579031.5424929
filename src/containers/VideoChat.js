import React, { useState, useEffect } from 'react';
import initPeerConnection from '../webrtc/peerConnection';
import { generateTurnServerConfig } from '../services/twilio';

const VideoChat = () => {
  const [localStream, setLocalStream] = useState(null);
  const [remoteStream, setRemoteStream] = useState(null);
  const [peerConnection, setPeerConnection] = useState(null);

  useEffect(() => {
    initPeerConnection().then((pc) => {
      setPeerConnection(pc);
      pc.pc.onaddstream = (event) => {
        setRemoteStream(event.stream);
      };
    });
  }, []);

  const handleTurnServerConfig = async () => {
    try {
      const turnConfig = await generateTurnServerConfig();
      peerConnection.pc.setConfiguration({ iceServers: [turnConfig] });
    } catch (error) {
      console.error('Error setting TURN server config:', error);
    }
  };

  useEffect(() => {
    if (peerConnection) {
      handleTurnServerConfig();
    }
  }, [peerConnection]);

  return (
    <div>
      {localStream && (
        <video
          width="50%"
          height="50%"
          srcObject={localStream}
          autoPlay
          playsInline
        />
      )}
      {remoteStream && (
        <video
          width="50%"
          height="50%"
          srcObject={remoteStream}
          autoPlay
          playsInline
        />
      )}
    </div>
  );
};

export default VideoChat;