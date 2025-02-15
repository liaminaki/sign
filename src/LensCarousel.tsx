import { act, useState } from "react";
import { useCameraKit } from "./hooks/useCameraKit";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function LensCarousel() {
  const { session, lenses } = useCameraKit();
  const [activeIndex, setActiveIndex] = useState(0);

  const applyLens = (lensId: string, index: number) => {
    const selectedLens = lenses.find((lens) => lens.id === lensId);
    if (selectedLens) {
      session.applyLens(selectedLens);
      setActiveIndex(index); // Update active index
    }
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
            applyLens(lenses[swiper.realIndex]?.id, swiper.realIndex) // Apply lens on swipe
        }
      >
        {lenses.map((lens, index) => (
          <SwiperSlide
            key={lens.id}
            className="lens-item"
            onClick={() => applyLens(lens.id, index)}
          >
            <div
              className="lens-circle"
              style={{
                backgroundColor: activeIndex === index ? "white" : "rgba(0, 0, 0, 0.5)",
                color: activeIndex === index ? "black" : "white",
                transform: activeIndex === index ? "scale(1.4)" : "scale(1)", // Enlarge the active lens
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