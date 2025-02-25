import { useCameraKit } from "./hooks/useCameraKit";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface LensCarouselProps {
  selectedLens: string | null;
  setSelectedLens: (lensId: string) => void;
}

const LensCarousel: React.FC<LensCarouselProps> = ({ 
  selectedLens, 
  setSelectedLens,
}) => {
  const { lenses } = useCameraKit();

  const handleLensChange = (lensId: string, index: number) => {
    setSelectedLens(lensId); // Update lens in App.tsx
  };

  return (
    <div className="lens-carousel-container">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={20}
        centeredSlides={true}
        slideToClickedSlide={true}
        className="lens-swiper"
        onSlideChange={(swiper) => 
          handleLensChange(lenses[swiper.realIndex]?.id, swiper.realIndex) // Apply lens on swipe
        }
      >
        {lenses.map((lens, index) => (
          <SwiperSlide
            key={lens.id}
            className="lens-item"
            onClick={() => handleLensChange(lens.id, index)}
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