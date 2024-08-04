
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';   
import { A11y, Navigation, Pagination } from 'swiper/modules';
import SwiperButton from '../button/SwiperButton';
import { reviews } from '../../data';
import LargeText from '../text/LargeText';

const Review = () => {
  return (
    <div className="max-w-screen-lg mx-auto p-4 my-12">
      <LargeText text='Upcoming Review & Demo'/>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={16}
        slidesPerView="auto"
      >
       {reviews.map((review)=> 
        <SwiperSlide className='res-slide '>
          <img src={review.image} alt="" className='w-[200px]'/>
          <p className='my-3'>{review.name}</p>
          <p>{review.date}</p>
        </SwiperSlide>
      )}    
        <SwiperButton />
      </Swiper>
  </div>
  );
};

export default Review