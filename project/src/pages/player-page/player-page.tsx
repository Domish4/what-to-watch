import { FilmType } from '../../types/films';

type PlayerProps = {
  films: FilmType[];
}

function PlayerPage({films}: PlayerProps): JSX.Element {
  return (
    <div className="PlayerPage">
      <video src="#" className="PlayerPage__video" poster="img/PlayerPage-poster.jpg"></video>

      <button type="button" className="PlayerPage__exit">Exit</button>

      <div className="PlayerPage__controls">
        <div className="PlayerPage__controls-row">
          <div className="PlayerPage__time">
            <progress className="PlayerPage__progress" value="30" max="100"></progress>
            <div className="PlayerPage__toggler" style={{left: '30%'}}>Toggler</div>
          </div>
          <div className="PlayerPage__time-value">1:30:29</div>
        </div>

        <div className="PlayerPage__controls-row">
          <button type="button" className="PlayerPage__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="PlayerPage__name">Transpotting</div>

          <button type="button" className="PlayerPage__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default PlayerPage;
