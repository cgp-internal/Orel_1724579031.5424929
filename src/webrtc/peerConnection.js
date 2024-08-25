const RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;

class PeerConnection {
  constructor() {
    this.pc = new RTCPeerConnection({
      iceServers: [{ urls: "stun:stun.l.google.com:19302" }]
    });

    this.pc.onicecandidate = (event) => {
      if (event.candidate) {
        console.log("Got candidate");
      }
    };

    this.pc.onaddstream = (event) => {
      console.log("got remote stream");
    };

    this.pc.oniceconnectionstatechange = (event) => {
      console.log("ICE connection state changed to " + this.pc.iceConnectionState);
    };
  }

  initPeerConnection() {
    this.pc.createOffer().then((offer) => {
      return this.pc.setLocalDescription(new RTCSessionDescription({ type: 'offer', sdp: offer }));
    }).then(() => {
      console.log("Offer created and set as local description");
    }).catch((error) => {
      console.error("Error creating offer", error);
    });
  }
}

const initPeerConnection = () => {
  return new PeerConnection().initPeerConnection();
}

export { initPeerConnection };