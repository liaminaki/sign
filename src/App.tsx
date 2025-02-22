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
  const [isRepeating, setIsRepeating] = useState(false);

  const startCameraKit = useCallback(async () => {
    const mediaStream = await navigator.mediaDevices.getUserMedia({
      video: true,
      /* Additional options like resolution, frame rate and facing mode can be set here*/
    });

    const source = createMediaStreamSource(mediaStream, {
      transform: Transform2D.MirrorX,
    });

    session.setSource(source);
    session.applyLens(lenses[0]);
    setSelectedLens(lenses[0].id); // Set default lens state
    session.play('live');
  }, [session, lenses]);

  // Effect to start the CameraKit session
  useEffect(() => {
    startCameraKit();
  }, [startCameraKit]);

  // Effect to update the lens when selected
  useEffect(() => {
    if (!session || !selectedLens) return;

    const lens = lenses.find((l) => l.id === selectedLens);
    if (lens) {
      session.applyLens(lens);
    }
  }, [selectedLens, session, lenses]);

  // Effect to attach CameraKit's output to the DOM
  useEffect(() => {
    canvasContainerRef?.current?.replaceWith(session.output.live);
  }, [session]);

  const toggleLock = () => setIsLocked((prev) => !prev);
  const togglePlay = () => setIsPlaying((prev) => !prev);
  const toggleRepeating = () => setIsRepeating((prev) => !prev);

  return (
    <div className="app-container">
      <div ref={canvasContainerRef}></div>
      <LensCarousel selectedLens={selectedLens} setSelectedLens={setSelectedLens}/>
      <Controls isLocked={isLocked}
        isPlaying={isPlaying}
        isRepeating={isRepeating}
        toggleLock={toggleLock}
        togglePlay={togglePlay}
        toggleRepeating={toggleRepeating} 
      
      />
    </div>
  );
}

export default App;
