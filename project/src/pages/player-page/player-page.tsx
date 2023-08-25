import { useRef, useState} from 'react';
import {useNavigate, } from 'react-router-dom';
import formatTime, {PlayerButtons} from '../../const';
import {useAppSelector} from '../../hooks';


const Player = ():JSX.Element => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const progressRef = useRef<HTMLProgressElement | null>(null);
  const togglerRef = useRef<HTMLDivElement | null>(null);
  const [currentButton, setCurrentButton] = useState(PlayerButtons.Pause);
  const film = useAppSelector((state) => state.film);
  const [timeCount, setTimeCount] = useState(0);
  const navigate = useNavigate();


  const handlePlayAndPauseButtonClick = () => {
    if (!videoRef.current) {
      return;
    }
    if (currentButton === PlayerButtons.Pause) {
      videoRef.current?.pause();
      setCurrentButton(PlayerButtons.Play);
    } else if (currentButton === PlayerButtons.Play) {
      videoRef.current?.play();
      setCurrentButton(PlayerButtons.Pause);
    }
  };

  const handleFullScreenButton = () => {
    if (!videoRef.current) {
      return;
    }

    videoRef.current?.requestFullscreen();
  };

  const handleCloseButton = () => navigate('/');

  const handleTimeUpdate = () => {
    if (!videoRef.current || !togglerRef.current || !progressRef.current) {
      return;
    }

    const leftTime = Math.round(videoRef.current.duration - videoRef.current.currentTime);
    const leftTimeInPercents = 100 - Math.trunc((leftTime / videoRef.current.duration) * 100);
    progressRef.current.value = leftTimeInPercents;
    togglerRef.current.style.left = `${leftTimeInPercents}%`;

    if (!timeCount || leftTime < timeCount) {
      setTimeCount(leftTime);
    }
  };


  return (
    <div className="player">
      <video
        src={film?.videoLink}
        className="player__video"
        ref={videoRef}
        autoPlay
        onTimeUpdate={handleTimeUpdate}
        poster={film?.backgroundImage}
      >
      </video>

      <button type="button"
        onClick={handleCloseButton}
        className="player__exit"
      >Exit
      </button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress ref={progressRef} className="player__progress" value="0" max="100"></progress>
            <div ref={togglerRef}
              draggable="true"
              className="player__toggler"
              style={{left: '0%'}}
            >
              Toggler
            </div>
          </div>
          <div className="player__time-value">{formatTime(timeCount)}</div>
        </div>

        <div className="player__controls-row">
          <button type="button"
            onClick={handlePlayAndPauseButtonClick}
            className="player__play"
          >
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref={currentButton}></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">{film?.name}</div>

          <button type="button"
            onClick={handleFullScreenButton}
            className="player__full-screen"
          >
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref={PlayerButtons.FullScreen}></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Player;
