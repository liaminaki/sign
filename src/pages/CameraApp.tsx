import { useCallback, useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate} from 'react-router-dom';
import { useCameraKit } from '../hooks/useCameraKit';
import { createMediaStreamSource, Transform2D} from '@snap/camera-kit';
import StepsCarousel from "../components/StepsCarousel";
import Controls from "../components/Controls";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faPalette } from '@fortawesome/free-solid-svg-icons';
import ModalGeneral from '../components/ModalGeneral';
import hologram1 from "../assets/img/hologram1.png";
import hologram2 from "../assets/img/hologram2.png";
import normal from "../assets/img/normal.png";

const materialImages: Record<string, string> = {
  "Hologram 1": hologram1,
  "Hologram 2": hologram2,
  "Materials/Normal": normal,
};

const createSteps = (title: string, steps: number, isStatic: boolean, duration: number | number[] | null) => {
  return Array.from({ length: steps }, (_, i) => ({
    index: i,
    title: steps > 1 ? `${title.toLowerCase()}_${i + 1}` : `${title.toLowerCase()}`,
    duration: isStatic ? null : (Array.isArray(duration) ? duration[i] : duration)
  }))
};

const CameraApp: React.FC = () => {
  const { session, lenses } = useCameraKit();
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const [selectedLens, setSelectedLens] = useState<string | null>(null);
  const [isLocked, setIsLocked] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1.0);
  const [autoSlide, setAutoSlide] = useState(false); // Determine need to force switch lens either due to autoplay or restart
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isTextureModalOpen, setIsTextureModalOpen] = useState(false);
  const [materialType, setMaterialType] = useState("Hologram 1");
  const [currentStep, setCurrentStep] = useState<{ index: number, title: string, duration: number | null }>({
    index: 0,
    title: "Default",
    duration: null,
  });

  const navigate = useNavigate();
  const location = useLocation();
  const { selectedSign } = location.state || {}; // Access selectedSign data
  const steps = createSteps(selectedSign.title, selectedSign.steps, selectedSign.isStatic, selectedSign.duration);
  
  console.log(selectedSign); // Check the passed data
  
  const handleTextureModalOpen = () => setIsTextureModalOpen(true);
  const handleTextureModalClose = () => setIsTextureModalOpen(false);

  const startCameraKit = useCallback(async () => {
    const isPortrait = window.innerHeight > window.innerWidth;
    const mediaStream = await navigator.mediaDevices.getUserMedia({
      video: {
        ...(!isPortrait && { width: { ideal: 1920 }, height: { ideal: 1920 } }),
        frameRate: { ideal: 30, max: 60 },
        facingMode: { ideal: "user" },
      }
    });

    const source = createMediaStreamSource(mediaStream, {
      transform: Transform2D.MirrorX,
    });

    session.setSource(source);
    selectLens();
    setCurrentStep(steps[0]);
    session.play('live');
  }, [session, lenses]);

  // Start the CameraKit session
  useEffect(() => {
    startCameraKit();
  }, [startCameraKit]);

  // Update lens when selected, or isPlaying and isLocked changes
  useEffect(() => {
    updateLens();
    if (isPlaying && !isLocked) {
      switchToNextLens();
    }
  }, [selectedLens, session, lenses, isPlaying, isLocked, materialType, currentStep]);

  // Attach CameraKit's output to the DOM
  useEffect(() => {
    canvasContainerRef?.current?.replaceWith(session.output.live);
  }, [session]);

  // Clear the timeout when isPlaying becomes false and isLocked
  // This is to prevent the lens from switching when paused or when locked after playing
  useEffect(() => {
    if ((!isPlaying || isLocked) && timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, [isPlaying, isLocked]);

  const selectLens = () => {
    const lens = lenses.find((l) => l.name === selectedSign.set);
    if (lens) {
      setSelectedLens(lens.id);
    } else {
      console.error(`Lens with name ${selectedSign.set} not found`);
    }
  }

  const switchToNextLens = () => {
    if (selectedLens) {
      const duration = currentStep.duration ?? 2.0;

      // Wait for the duration before switching to the next lens
      // Cleared when isPlaying becomes false
      timeoutRef.current = setTimeout(() => {
        const nextIndex = (currentStep.index + 1) % steps.length;
        setAutoSlide(true);
        setCurrentStep(steps[nextIndex]);
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
          "materialType": materialType,
          "signTitle": currentStep.title,
        },
      });

      console.log("Lens updated");
      console.log(lens.vendorData);
    }
  }

  const toggleLock = () => {
    setIsLocked((prev) => !prev);
    setIsPlaying(false); // Pause when locking
  }
  const togglePlay = () => setIsPlaying((prev) => !prev);
  const changePlaybackSpeed = () => {
    const speedLevels = [1.0, 0.5, 0.25];
    const currentIndex = speedLevels.indexOf(playbackSpeed);
    const newSpeed = speedLevels[(currentIndex + 1) % speedLevels.length];
    setPlaybackSpeed(newSpeed);
    setIsPlaying(false); // Pause when changing speed
  };
  const restart = () => {
    setAutoSlide(true);
    setCurrentStep(steps[0]); // Reset to the first step
    setIsPlaying(false);
  };

  return (
    <main className="app-container camera">
      <div ref={canvasContainerRef}></div>
      <div className="gradient-black"></div>
      <section className="ui-container">
        <div className="header">
          <button title='Back to Lesson' onClick={() => navigate(-1)}>
            <FontAwesomeIcon icon={faArrowLeft} size="lg" />
          </button>
          <div>{selectedSign.title}</div>
          <button title='Texture' onClick={handleTextureModalOpen}>
            <FontAwesomeIcon icon={faPalette} size="lg" />
          </button>
        </div>
        {selectedSign.steps > 1 && (
          <StepsCarousel
            steps={steps}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            setIsPlaying={setIsPlaying} 
            autoSlide={autoSlide}
            setAutoSlide={setAutoSlide}
          />
        )}
        <Controls isLocked={isLocked}
          isPlaying={isPlaying}
          playbackSpeed={playbackSpeed}
          isStatic={selectedSign.isStatic}
          toggleLock={toggleLock}
          togglePlay={togglePlay}
          changePlaybackSpeed={changePlaybackSpeed}
          restart={restart}
        />
      </section>

      {isTextureModalOpen &&
        <ModalGeneral onClose={handleTextureModalClose}>
          <p className="material-modal-title">3D Visual Texture</p>
          <div className="material-selection">
            {["Hologram 1", "Hologram 2", "Materials/Normal"].map((type) => (
              <div
                key={type}
                className={`material-option ${materialType === type ? "selected" : ""}`}
                onClick={() => setMaterialType(type)}
              >
                <img src={materialImages[type]} alt={type} />
                <p>{type === "Materials/Normal" ? "Normal" : type}</p>
              </div>
            ))}
          </div>
        </ModalGeneral>
      }
      
    </main>
  );
}

export default CameraApp;
