import React, { useEffect } from "react";
import { useCameraKit } from "./hooks/useCameraKit";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface LensCarouselProps {
  selectedLens: string | null;
  setSelectedLens: (lensId: string) => void;
  setIsPlaying: (isPlaying: boolean) => void;
  autoPlayed: boolean;
  setAutoPlayed: (autoPlayed: boolean) => void;
}

const LensCarousel: React.FC<LensCarouselProps> = ({ 
  selectedLens, 
  setSelectedLens,
  setIsPlaying,
  autoPlayed,
  setAutoPlayed, 
}) => {
  const { lenses } = useCameraKit();
  const swiperRef = React.useRef<any>(null);  

  const handleLensChange = (lensId: string, index: number) => {
    if (autoPlayed) {
      setAutoPlayed(false);
      return; // Prevent autoSlideToLens from being called by not selecting a lens again 
    }

    // If lens is changed through manual swipe and click
    setSelectedLens(lensId); // Update lens in App.tsx
    setIsPlaying(false); // Pause state when changing lens
  };

  useEffect(() => {
    if (autoPlayed)
      slideToNextLens();
  }, [selectedLens, lenses]);

  // Used when autoplaying
  const slideToNextLens = () => {
    console.log("autoSlideToLens");
    if (selectedLens) {
      const currentIndex = lenses.findIndex((lens) => lens.id === selectedLens);
      if (currentIndex !== -1) {
        swiperRef.current.slideTo(currentIndex);
      }
    }
  }

  return (
    <div className="lens-carousel-container">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={20}
        centeredSlides={true}
        slideToClickedSlide={true}
        className="lens-swiper"
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Store swiper instance
        onSlideChange={(swiper) => 
          handleLensChange(lenses[swiper.realIndex]?.id, swiper.realIndex) // Apply lens on swipe
        }
      >
        {lenses.map((lens, index) => (
          <SwiperSlide
            key={lens.id}
            className="lens-item"
            // onClick={() => handleLensChange(lens.id, index)} 
          >
            <div
              className="lens-circle"
              style={{
                backgroundColor: selectedLens === lens.id ? "white" : "rgba(0, 0, 0, 0.5)",
                color: selectedLens === lens.id ? "black" : "white",
                transform: selectedLens === lens.id ? "scale(1.4)" : "scale(1)", // Enlarge the active lens
              }}
            >
              {index + 1}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default LensCarousel;