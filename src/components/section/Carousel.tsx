import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import LargeText from "../text/LargeText";

import { Pagination, Navigation } from "swiper/modules";
import { carousel } from "../../data";

const Carousel = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper h-[90vh] "
    >
      {carousel.map((c) => (
        <SwiperSlide
          style={{ backgroundImage: `url(${c.bg})` }}
          className="bg-cover bg-center h-full flex items-center justify-center"
        >
          <div className="relative w-[1040px] mx-auto p-4 flex flex-col md:flex-row justify-between items-center">
            <LargeText text={c.text} style="text-white" />
            <img
              src={c.image}
              alt={c.text}
              className="hidden md:flex mb-4 md:mb-0 md:mr-4"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
