import { useEffect, useRef } from 'react';
import { FilmType } from '../../types/films';

type VideoPlayerProps = {
film: FilmType;
}

function VideoPlayer({film}: VideoPlayerProps): JSX.Element {

  const playerRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (playerRef.current) {
        playerRef.current.play();
      }
    }, 1000);

    return () => clearTimeout(timeOut);
  }, []);

  return (
    <video poster={film.previewImage} src={film.videoLink} ref={playerRef} style={{width: '280px', height: '175px'}} muted >
      <source
        src={film.videoLink}
        type="video/mp4"
      />
    </video>
  );
}

export default VideoPlayer;
