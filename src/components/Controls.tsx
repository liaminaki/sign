import { Lock, Unlock, Play, Pause} from "lucide-react";

interface ControlsProps {
  isLocked: boolean;
  isPlaying: boolean;
  toggleLock: () => void;
  togglePlay: () => void;
}

const Controls: React.FC<ControlsProps> = ({
  isLocked,
  isPlaying,
  toggleLock,
  togglePlay,
}) => {

  return (
    <div className="controls-container">
      <button className="control-btn" onClick={toggleLock}>
        {isLocked ? <Lock size={20} /> : <Unlock size={20} />}
      </button>

      <button className="control-btn play-btn" onClick={togglePlay}>
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
      </button>
    </div>
  );
};

export default Controls;