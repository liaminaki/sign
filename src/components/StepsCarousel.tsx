import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface StepsCarouselProps {
  steps: { index: number, title: string; duration: number | null }[];
  currentStep: { index: number, title: string, duration: number | null };
  setCurrentStep: (step: { index: number; title: string; duration: number | null }) => void;
  setIsPlaying: (isPlaying: boolean) => void;
  autoSlide: boolean;
  setAutoSlide: (autoSlide: boolean) => void;
}

const StepsCarousel: React.FC<StepsCarouselProps> = ({ 
  steps,
  currentStep,
  setCurrentStep,
  setIsPlaying,
  autoSlide,
  setAutoSlide, 
}) => {
  const swiperRef = React.useRef<any>(null);  

  const handleStepChange = (index: number) => {
    if (autoSlide) {
      setAutoSlide(false);
      return; // Prevent autoSlideToLens from being called by not selecting a lens again 
    }

    // If lens is changed through manual swipe and click
    setCurrentStep(steps[index]);
    setIsPlaying(false); // Pause state when changing lens
  };

  useEffect(() => {
    if (autoSlide)
      slideToSelectedLens();
  }, [currentStep, steps]);

  // Used when autoplaying or restarting
  const slideToSelectedLens = () => {
    console.log("autoSlideToLens");
    if (currentStep) {
      if (currentStep.index !== -1) {
        swiperRef.current.slideTo(currentStep.index);
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
        handleStepChange(swiper.realIndex) // Apply lens on swipe
      }
    >
      <div className="center-circle"></div>
      {steps.map((step, index) => (
        <SwiperSlide
          title={`Step ${index + 1}`}
          key={step.title}
          className="lens-item"
          style={{
            // backgroundColor: selectedLens === lens.id ? "white" : "rgba(0, 0, 0, 0.3)",
            // color: selectedLens === lens.id ? "black" : "white",
            transform: currentStep.title === step.title ? "scale(1.2)" : "", // Enlarge the active lens
          }}
          // onClick={() => handleStepChange(lens.id, index)} 
        >
          {index + 1}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default StepsCarousel;