import { useSwiper } from 'swiper/react';



const SwiperButton = () => {

  const swiper = useSwiper();
  return (
    <div className="my-8 flex gap-8">
    
    <button onClick={() => swiper.slidePrev()} >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
      </svg>
    </button>

    <button onClick={() => swiper.slideNext()}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
    </button>
  </div>
  )
}

export default SwiperButton