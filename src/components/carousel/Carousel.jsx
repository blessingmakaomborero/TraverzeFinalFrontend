import { Swiper } from "swiper/react";
import { Pagination  ,Autoplay} from "swiper";
import "./Carousel.scss";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/pagination";

const Carousel = ({ children, slides }) => {
  return (
    <Swiper
      modules={[ Autoplay ,Pagination]}
      spaceBetween={50}
      slidesPerView={slides}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      pagination={{ clickable: true }}
    >
      {children}
      {/* PAGINATION MARGIN */}
      <div style={{ marginTop: "70px" }}></div>
    </Swiper>
  );
};

Carousel.defaultProps = {
  slides: "auto",
};

export default Carousel;
