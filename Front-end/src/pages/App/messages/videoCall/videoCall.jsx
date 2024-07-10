import React, { useEffect, useRef, useState } from 'react';
import Peer from "simple-peer"
import {TextIcon,Phone, Mic, MicOff, Cookie} from "lucide-react"
import { ImPhoneHangUp } from "react-icons/im";
import { useSocket } from '../../../../hooks/contextApi/useSocketContext';
import style from "./videoCall.module.css"
import { useUser } from '../../../../hooks/contextApi';
import CryptoJS from 'crypto-js';
import Cookies from "js-cookie"
import AgoraRTC from 'agora-rtc-sdk-ng';
import { useLocation,useNavigate } from 'react-router-dom';
import apiService from '../../../../apiService';


export default function VideoCall() {
  const {socket} = useSocket()
  const {user} = useUser()
  const location = useLocation();
  const [changeMic,setChangeMic] = React.useState(false)
  const [muted, setMuted] = useState(false); 
  const [caller,setCaller] = React.useState(null)
  const channelName = location.search.split("?")[1]
  const token = location.search.split("?")[2]
  const [joined, setJoined] = useState(false);
  const client = useRef(AgoraRTC.createClient({ mode: 'rtc', codec: 'vp8' })).current;
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const history = useNavigate()
  const APP_ID = '3d283c772afb497eb54e542a0bcd1fc0';
  const uid = null; // Agora will assign a unique UID for you

  const newStyle = {
    "postion": !joined && "absolute",
    "width": !joined && "100%",
    "bottom": !joined && "25rem",
  }

  React.useEffect(() => {
    if (channelName === user.id) {
      joinChannel();
    }else{
      const encryptedCall = Cookies.get('caller');
      if (encryptedCall) {
        const bytes = CryptoJS.AES.decrypt(encryptedCall, 'boaSaude');
        const decryptedCall = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        setCaller(decryptedCall);
      }
    }
   
  }, [location]);

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
    history(`/chat/${channelName}`);
    window.location.reload()
  };

  console.log(caller);
	return (
		<main className={style.main}>
      <div className={style.container} >
        <div className={style.videoContainer}>
          <div className={style.divMyVideo} >
            <video className={style.myVideo} ref={localVideoRef} autoPlay playsInline ></video>
          </div>
          <div className={style.divUserVideo} >
            <video className={style.userVideo} ref={remoteVideoRef} autoPlay playsInline></video>
          </div>
        </div>
        <div  className={style.myId}>
          {
             
             !joined && caller ? (
                <div style={newStyle} className={style.info}>
                <h2>{caller.caller}</h2>
                  <div className={style.btns}>
                    <button className={style.btnAnswer} onClick={joinChannel}>
                      <Phone fill='#fff' color='#fff'/>
                    </button>
                    <button className={style.btnPhone} onClick={leaveChannel}>
                      <ImPhoneHangUp fill='#fff' color='#fff'/>
                    </button>
                  </div>
                </div>
              )
              
             :
              <div className={style.info}>
                <div className={style.btns}>
              <button className={style.btnPhone} onClick={leaveChannel}>
              <ImPhoneHangUp fill='#fff' color='#fff'/>
              
            </button>
              
            </div>
              </div>
          }
        </div>
        
      </div>
		</main>
	)
}

