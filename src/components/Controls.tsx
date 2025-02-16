import { useState } from "react";
import { Lock, Unlock, Play, Pause, Repeat, RefreshCw, Slash } from "lucide-react";

function Controls() {
  const [isLocked, setIsLocked] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [repeatMode, setRepeatMode] = useState<"disabled" | "once" | "repeat">("disabled");

  const toggleLock = () => setIsLocked((prev) => !prev);
  const togglePlay = () => setIsPlaying((prev) => !prev);
  const cycleRepeatMode = () => {
    setRepeatMode((prev) =>
      prev === "disabled" ? "once" : prev === "once" ? "repeat" : "disabled"
    );
  };

  return (
    <div className="controls-container">
      <button className="control-btn" onClick={toggleLock}>
        {isLocked ? <Lock size={20} /> : <Unlock size={20} />}
      </button>

      <button className="control-btn play-btn" onClick={togglePlay}>
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
      </button>

      <button className="control-btn" onClick={cycleRepeatMode}>
        {repeatMode === "repeat" ? (
          <Repeat size={20} />
        ) : repeatMode === "once" ? (
          <RefreshCw size={20} />
        ) : (
          <Slash size={20} />
        )}
      </button>
    </div>
  );
}

export default Controls;