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
  1.0: "1.0x Normal",
  0.5: "0.5x Slow",
  0.25: "0.25x Very Slow",
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
        <button
          title={isLocked ? "Unlock Step" : "Repeat Step"} 
          className="control-btn"
          onClick={toggleLock}
        >
          {isLocked ? <FontAwesomeIcon icon={faLock} size="lg" /> : <FontAwesomeIcon icon={faLockOpen} size="lg" /> }
        </button>

        <button
          title={isPlaying ? "Pause" : "Play"}
          className="control-btn play-btn"
          onClick={togglePlay}>
          {isPlaying ? <FontAwesomeIcon icon={faPause} size="xl" /> : <FontAwesomeIcon icon={faPlay} size="xl" />}
        </button>

        <button 
          title={`Playback Speed: ${speedLabels[playbackSpeed].split(' ').slice(1).join(' ')}`} 
          className="control-btn speed-btn" 
          onClick={changePlaybackSpeed}
        >
          <span>{speedLabels[playbackSpeed].split(' ')[0]}</span>
        </button>
      </div>

      <div className="controls-group right-group">
        <button title='Restart' onClick={restart}>
          <FontAwesomeIcon icon={faRotateLeft} size="lg" />
        </button>
      </div>

    </div>
  );
};

export default Controls;