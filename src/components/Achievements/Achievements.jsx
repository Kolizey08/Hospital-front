import React from "react";

import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/scss/pagination";

import styles from "./Achievements.module.scss";
import achievement from "../../assets/img/achievement.png";

const Achievements = () => {
  return (
    <div className={styles.achievements}>
      <div className={styles.achievements_wrapper}>
        <div className={styles.achievements_bText}>
          Сертификаты, награды и дипломы
        </div>
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={3}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
          }}
          centeredSlides={false}
        >
          <SwiperSlide>
            <img src={achievement} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={achievement} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={achievement} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={achievement} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={achievement} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={achievement} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Achievements;
