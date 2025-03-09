import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faLockOpen, faPlay, faPause, faRotateLeft } from '@fortawesome/free-solid-svg-icons';
import snapAttribution from '../assets/img/snap-attri.svg';

interface ControlsProps {
  isLocked: boolean;
  isPlaying: boolean;
  playbackSpeed: number;
  toggleLock: () => void;
  togglePlay: () => void;
  changePlaybackSpeed: () => void;
  restart: () => void; 
}

const speedLabels: { [key: number]: string } = {
  1.0: "1.0x",
  0.5: "0.5x",
  0.25: "0.25x",
};

const Controls: React.FC<ControlsProps> = ({
  isLocked,
  isPlaying,
  playbackSpeed,
  toggleLock,
  togglePlay,
  changePlaybackSpeed,
  restart,
}) => {

  return (
    <div className="controls-container">

      <div className="controls-group left-group">
        <img src={snapAttribution} alt="Snap Attribution" className="custom-icon" />
      </div>
      
      <div className="controls-group center-group">
        <button className="control-btn" onClick={toggleLock}>
          {isLocked ? <FontAwesomeIcon icon={faLock} size="lg" /> : <FontAwesomeIcon icon={faLockOpen} size="lg" /> }
        </button>

        <button className="control-btn play-btn" onClick={togglePlay}>
          {isPlaying ? <FontAwesomeIcon icon={faPause} size="xl" /> : <FontAwesomeIcon icon={faPlay} size="xl" />}
        </button>

        <button className="control-btn" onClick={changePlaybackSpeed}>
          <span>{speedLabels[playbackSpeed]}</span>
        </button>
      </div>

      <div className="controls-group right-group">
        <button onClick={restart}>
          <FontAwesomeIcon icon={faRotateLeft} size="lg" />
        </button>
      </div>

    </div>
  );
};

export default Controls;