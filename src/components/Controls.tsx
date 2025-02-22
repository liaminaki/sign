import { Lock, Unlock, Play, Pause, Repeat, RefreshCw, Slash } from "lucide-react";

interface ControlsProps {
  isLocked: boolean;
  isPlaying: boolean;
  isRepeating: boolean;
  toggleLock: () => void;
  togglePlay: () => void;
  toggleRepeating: () => void;
}

const Controls : React.FC<ControlsProps> = ({
  isLocked,
  isPlaying,
  isRepeating,
  toggleLock,
  togglePlay,
  toggleRepeating,
}) => {

  return (
    <div className="controls-container">
      <button className="control-btn" onClick={toggleLock}>
        {isLocked ? <Lock size={20} /> : <Unlock size={20} />}
      </button>

      <button className="control-btn play-btn" onClick={togglePlay}>
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
      </button>

      <button className="control-btn" onClick={toggleRepeating}>
        {isRepeating ? <Repeat size={20} /> : <RefreshCw size={20} />}
      </button>
    </div>
  );
}

export default Controls;