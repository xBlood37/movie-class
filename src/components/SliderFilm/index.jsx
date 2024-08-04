import 'swiper/css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './slider.css';

import React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const SliderFilm = ({ movie }) => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {movie.map((obj) => {
        return (
          <SwiperSlide key={obj.id}>
            <div className="slider-window">
              <img
                src={`https://image.tmdb.org/t/p/w500/${obj.poster_path}`}
                alt="постер"
              />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SliderFilm;
