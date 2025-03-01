import { useCallback, useEffect, useRef, useState } from 'react';
import { useCameraKit } from './hooks/useCameraKit';
import { createMediaStreamSource, Transform2D, Lens } from '@snap/camera-kit';
import LensCarousel from "./LensCarousel";
import Controls from "./components/Controls";

function App() {
  const { session, lenses } = useCameraKit();
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const [selectedLens, setSelectedLens] = useState<string | null>(null);
  const [isLocked, setIsLocked] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1.0);
  const [autoPlayed, setAutoPlayed] = useState(false); // Determine if switching of lens is due to autoplay
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const startCameraKit = useCallback(async () => {
    const mediaStream = await navigator.mediaDevices.getUserMedia({
      video: true,
      /* Additional options like resolution, frame rate and facing mode can be set here*/
    });

    const source = createMediaStreamSource(mediaStream, {
      transform: Transform2D.MirrorX,
    });

    session.setSource(source);
    setSelectedLens(lenses[0].id); // Set default lens state
    session.play('live');
  }, [session, lenses]);

  // Start the CameraKit session
  useEffect(() => {
    startCameraKit();
  }, [startCameraKit]);

  // Update lens when selected, or isPlaying changes
  useEffect(() => {
    updateLens();
    if (isPlaying) {
      switchToNextLens();
    }
  }, [selectedLens, session, lenses, isPlaying]);

  // Attach CameraKit's output to the DOM
  useEffect(() => {
    canvasContainerRef?.current?.replaceWith(session.output.live);
  }, [session]);

  // Clear the timeout when isPlaying becomes false
  // This is to prevent the lens from switching when paused
  useEffect(() => {
    if (!isPlaying && timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, [isPlaying]);

  const getLensDuration = (lens: Lens): number => {
    const duration = parseFloat(lens.vendorData?.duration);
    return isNaN(duration) ? 2.0 : duration;
  };

  const switchToNextLens = () => {
    const lens = lenses.find((l) => l.id === selectedLens);
    if (lens) {
      const duration = getLensDuration(lens);

      // Wait for the duration before switching to the next lens
      // Cleared when isPlaying becomes false
      timeoutRef.current = setTimeout(() => {
        const currentIndex = lenses.findIndex((l) => l.id === selectedLens);
        const nextIndex = (currentIndex + 1) % lenses.length;
        setAutoPlayed(true);
        setSelectedLens(lenses[nextIndex].id);
      }, duration / playbackSpeed * 1000);
    }
  };

  const updateLens = () => {
    if (!session || !selectedLens) return;

    const lens = lenses.find((l) => l.id === selectedLens);
    if (lens) {
      session.applyLens(lens, { 
        launchParams: {
          "isPlaying": isPlaying ? "true" : "false",
          "playbackSpeed": playbackSpeed,
        },
      });

      console.log("Lens updated");
      console.log(lens.vendorData);
    }
  }

  const toggleLock = () => setIsLocked((prev) => !prev);
  const togglePlay = () => setIsPlaying((prev) => !prev);
  const changePlaybackSpeed = () => {
    const speedLevels = [1.0, 0.5, 0.25];
    const currentIndex = speedLevels.indexOf(playbackSpeed);
    const newSpeed = speedLevels[(currentIndex + 1) % speedLevels.length];
    setPlaybackSpeed(newSpeed);
    setIsPlaying(false); // Pause when changing speed
  };
  const restart = () => {
    setAutoPlayed(true);
    setSelectedLens(lenses[0].id); // Reset to the first lens
    setIsPlaying(false);
  };

  return (
    <div className="app-container">
      <div ref={canvasContainerRef}></div>
      <LensCarousel
        selectedLens={selectedLens} 
        setSelectedLens={setSelectedLens}
        setIsPlaying={setIsPlaying} 
        autoPlayed={autoPlayed}
        setAutoPlayed={setAutoPlayed}
      />
      <Controls isLocked={isLocked}
        isPlaying={isPlaying}
        playbackSpeed={playbackSpeed}
        toggleLock={toggleLock}
        togglePlay={togglePlay}
        changePlaybackSpeed={changePlaybackSpeed}
        restart={restart}
      />
    </div>
  );
}

export default App;
