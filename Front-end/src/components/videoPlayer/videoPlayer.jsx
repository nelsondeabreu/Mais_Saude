import React from 'react';
import style from "./videoPlayer.module.css"; // Estilos CSS para o player de vídeo
import { Maximize, PlayIcon, Volume2, VolumeX,Pause } from 'lucide-react';
import userImg from "../../assets/img/userImage.png"

export function VideoPlayer ({ videoSource }){
  const videoRef = React.useRef(null);
  const [muted, setMuted] = React.useState(false);
  const [play, setPlay] = React.useState(true);
  const [changePlay,setChangePlay] = React.useState(false)

  const handlePlayPause = () => {
    if (videoRef.current.paused || videoRef.current.ended) {
     videoRef.current.play();
     setChangePlay(true)
     setPlay(false) 
    } else {
      videoRef.current.pause();
      setChangePlay(false)
       setPlay(false)

    }
    
  };


  const handleFullscreen = () => {
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    } else if (videoRef.current.mozRequestFullScreen) { /* Firefox */
      videoRef.current.mozRequestFullScreen();
    } else if (videoRef.current.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
      videoRef.current.webkitRequestFullscreen();
    } else if (videoRef.current.msRequestFullscreen) { /* IE/Edge */
      videoRef.current.msRequestFullscreen();
    }
  };

  const handleToggleMute = () => {
    videoRef.current && (videoRef.current.muted = !muted);
    setMuted(!muted);
  };

  return (
    <div className={style.videoContainer}>
      <video ref={videoRef} className={style.video}>
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className={style.otherControls}>
      {
                !changePlay ? (
                  <button onClick={handlePlayPause} className={style.controlButton}>
                    <PlayIcon/>
                  </button>
                ): (
                  <button onClick={handlePlayPause} className={style.controlButton}>
                    <Pause/>
                  </button>
                )
              }
          <button onClick={handleFullscreen} className={style.controlButton}>
            <Maximize/>
          </button>
          <button onClick={handleToggleMute} className={style.controlButton}>
            {
              muted ? <VolumeX/> : <Volume2/>
            }
        </button>
      </div>
    </div>
  );
};

export function VitionPlayer ({ videoSource }){
  const videoRef = React.useRef(null);
  const [muted, setMuted] = React.useState(false);
  const [play, setPlay] = React.useState(true);
  const [changePlay,setChangePlay] = React.useState(false)

  const handlePlayPause = () => {
    if (videoRef.current.paused || videoRef.current.ended) {
     videoRef.current.play();
     setChangePlay(true)
     setPlay(false) 
    } else {
      videoRef.current.pause();
      setChangePlay(false)
       setPlay(false)

    }
    
  };


  const handleFullscreen = () => {
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    } else if (videoRef.current.mozRequestFullScreen) { /* Firefox */
      videoRef.current.mozRequestFullScreen();
    } else if (videoRef.current.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
      videoRef.current.webkitRequestFullscreen();
    } else if (videoRef.current.msRequestFullscreen) { /* IE/Edge */
      videoRef.current.msRequestFullscreen();
    }
  };

  const handleToggleMute = () => {
    videoRef.current && (videoRef.current.muted = !muted);
    setMuted(!muted);
  };

  return (
    <div className={style.vitionContainer}>
      <video ref={videoRef} className={style.vition}>
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className={style.otherControls2}>
        <div className={style.infoUser}>
          <img src={userImg} alt=''/>
          <span>Jumper Man</span>
          <span className={style.btnFollow}>Conectar-se</span>
        </div>
        <div style={{display:"flex", alignItems:"center",width:"7rem"}}>
        {
          !changePlay ? (
            <button onClick={handlePlayPause} className={style.controlButton}>
              <PlayIcon/>
            </button>
          ): (
            <button onClick={handlePlayPause} className={style.controlButton}>
              <Pause/>
            </button>
          )
        }
        <button onClick={handleToggleMute} className={style.controlButton}>
          {
            muted ? <VolumeX/> : <Volume2/>
          }
        </button>
        </div>
        
      </div>
      <div className={style.legend}>
        <p>Venha a myLuz disfrutar de excelentes serviçosc!!</p>
      </div>
    </div>
  );
};


