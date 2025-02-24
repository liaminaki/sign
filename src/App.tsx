import { useCallback, useEffect, useRef, useState } from 'react';
import { useCameraKit } from './hooks/useCameraKit';
import { createMediaStreamSource, Transform2D } from '@snap/camera-kit';
import LensCarousel from "./LensCarousel";
import Controls from "./components/Controls";

function App() {
  const { session, lenses } = useCameraKit();
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const [selectedLens, setSelectedLens] = useState<string | null>(null);
  const [isLocked, setIsLocked] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1.0);

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
  }, [selectedLens, session, lenses, isPlaying]);

  // Attach CameraKit's output to the DOM
  useEffect(() => {
    canvasContainerRef?.current?.replaceWith(session.output.live);
  }, [session]);

  const updateLens = () => {
    if (!session || !selectedLens) return;

    const lens = lenses.find((l) => l.id === selectedLens);
    if (lens) {
      session.applyLens(lens, { 
        launchParams: {
          "isPlaying": isPlaying ? "true" : "false",
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
  };

  return (
    <div className="app-container">
      <div ref={canvasContainerRef}></div>
      <LensCarousel selectedLens={selectedLens} setSelectedLens={setSelectedLens} setIsPlaying={setIsPlaying}/>
      <Controls isLocked={isLocked}
        isPlaying={isPlaying}
        playbackSpeed={playbackSpeed}
        toggleLock={toggleLock}
        togglePlay={togglePlay}
        changePlaybackSpeed={changePlaybackSpeed}
      />
    </div>
  );
}

export default App;
