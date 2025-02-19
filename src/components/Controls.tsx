import { useState } from "react";
import { Lock, Unlock, Play, Pause, Repeat, RefreshCw, Slash } from "lucide-react";

function Controls() {
  const [isLocked, setIsLocked] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRepeating, setIsRepeating] = useState(false);

  const toggleLock = () => setIsLocked((prev) => !prev);
  const togglePlay = () => setIsPlaying((prev) => !prev);
  const toggleRepeating = () => setIsRepeating((prev) => !prev);

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