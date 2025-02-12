import { useState } from 'react';

function Controls() {
  const [isLocked, setIsLocked] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [repeatMode, setRepeatMode] = useState<'disabled' | 'once' | 'repeat'>('disabled');

  const toggleLock = () => setIsLocked((prev) => !prev);
  const togglePlay = () => setIsPlaying((prev) => !prev);
  const cycleRepeatMode = () => {
    setRepeatMode((prev) =>
      prev === 'disabled' ? 'once' : prev === 'once' ? 'repeat' : 'disabled'
    );
  };

  return (
    <div className="controls-container">
      <button onClick={toggleLock}>{isLocked ? 'Unlock' : 'Lock'}</button>
      <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
      <button onClick={cycleRepeatMode}>Repeat: {repeatMode}</button>
    </div>
  );
}

export default Controls;