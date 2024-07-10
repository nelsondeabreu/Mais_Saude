import React, { useEffect, useRef, useState } from 'react';
import AgoraRTC from 'agora-rtc-sdk-ng';
import apiService from './apiService';

const APP_ID = '3d283c772afb497eb54e542a0bcd1fc0';

const App2 = () => {
  const [token, setToken] = React.useState(null);
  const [joined, setJoined] = React.useState(false);
  const client = React.useRef(AgoraRTC.createClient({ mode: 'rtc', codec: 'vp8' })).current;
  const localVideoRef = React.useRef(null);
  const remoteVideoRef = React.useRef(null);

  const channelName = 'test-channel';
  const uid = null; // Agora will assign a unique UID for you

  React.useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await apiService.post("videoCall/token", { channelName });
        setToken(response.data.token);
      } catch (error) {
        console.error('Failed to fetch token:', error);
      }
    };

    fetchToken();
  }, []);

  React.useEffect(() => {
    if (token) {
      joinChannel();
    }
  }, [token]);

  const joinChannel = async () => {
    try {
      await client.join(APP_ID, channelName, token, uid);
      const [localAudioTrack, localVideoTrack] = await AgoraRTC.createMicrophoneAndCameraTracks();
      localVideoRef.current.srcObject = new MediaStream([localVideoTrack.getMediaStreamTrack()]);

      await client.publish([localAudioTrack, localVideoTrack]);
      setJoined(true);

      client.on('user-published', async (user, mediaType) => {
        if (mediaType === 'video') {
          await client.subscribe(user, mediaType);
          const remoteVideoTrack = user.videoTrack;
          remoteVideoRef.current.srcObject = new MediaStream([remoteVideoTrack.getMediaStreamTrack()]);
        }
        if (mediaType === 'audio') {
          await client.subscribe(user, mediaType);
          user.audioTrack.play();
        }
      });

      client.on('user-unpublished', (user) => {
        if (user.videoTrack) {
          user.videoTrack.stop();
          remoteVideoRef.current.srcObject = null;
        }
        if (user.audioTrack) {
          user.audioTrack.stop();
        }
      });
    } catch (error) {
      console.error('Failed to join channel:', error);
    }
  };

  const leaveChannel = async () => {
    await client.leave();
    setJoined(false);
    localVideoRef.current.srcObject = null;
    remoteVideoRef.current.srcObject = null;
  };

  return (
    <div>
      <div>
        <video ref={localVideoRef} autoPlay playsInline width="40%" height="50%"></video>
        <video ref={remoteVideoRef} autoPlay playsInline width="40%" height="50%"></video>
      </div>
      {joined ? (
        <button onClick={leaveChannel}>Leave</button>
      ) : (
        <button onClick={joinChannel}>Join</button>
      )}
    </div>
  );
};

export default App2;
