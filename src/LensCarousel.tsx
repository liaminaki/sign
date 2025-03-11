import React, { useEffect } from "react";
import { useCameraKit } from "./hooks/useCameraKit";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface LensCarouselProps {
  selectedLens: string | null;
  setSelectedLens: (lensId: string) => void;
  setIsPlaying: (isPlaying: boolean) => void;
  autoSlide: boolean;
  setAutoSlide: (autoSlide: boolean) => void;
}

const LensCarousel: React.FC<LensCarouselProps> = ({ 
  selectedLens, 
  setSelectedLens,
  setIsPlaying,
  autoSlide,
  setAutoSlide, 
}) => {
  const { lenses } = useCameraKit();
  const swiperRef = React.useRef<any>(null);  

  const handleLensChange = (lensId: string, index: number) => {
    if (autoSlide) {
      setAutoSlide(false);
      return; // Prevent autoSlideToLens from being called by not selecting a lens again 
    }

    // If lens is changed through manual swipe and click
    setSelectedLens(lensId); // Update lens in App.tsx
    setIsPlaying(false); // Pause state when changing lens
  };

  useEffect(() => {
    if (autoSlide)
      slideToSelectedLens();
  }, [selectedLens, lenses]);

  // Used when autoplaying or restarting
  const slideToSelectedLens = () => {
    console.log("autoSlideToLens");
    if (selectedLens) {
      const currentIndex = lenses.findIndex((lens) => lens.id === selectedLens);
      if (currentIndex !== -1) {
        swiperRef.current.slideTo(currentIndex);
      }
    }
  }

  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={16}
      centeredSlides={true}
      slideToClickedSlide={true}
      className="lens-carousel-container"
      onSwiper={(swiper) => (swiperRef.current = swiper)} // Store swiper instance
      onSlideChange={(swiper) => 
        handleLensChange(lenses[swiper.realIndex]?.id, swiper.realIndex) // Apply lens on swipe
      }
    >
      <div className="center-circle"></div>
      {lenses.map((lens, index) => (
        <SwiperSlide
          title={`Step ${index + 1}`}
          key={lens.id}
          className="lens-item"
          style={{
            // backgroundColor: selectedLens === lens.id ? "white" : "rgba(0, 0, 0, 0.3)",
            // color: selectedLens === lens.id ? "black" : "white",
            transform: selectedLens === lens.id ? "scale(1.2)" : "", // Enlarge the active lens
          }}
          // onClick={() => handleLensChange(lens.id, index)} 
        >
          {index + 1}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default LensCarousel;