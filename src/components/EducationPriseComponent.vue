<template>
  <section class="bg-education-price">
    <div class="container">
      <h2 class="footer__titles">Стоимость обучения</h2>
      <p class="education-price-discount">
        20% студентов получат работу с заработком от 500$/мес.
      </p>
      <div
        class="education-prices"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        <swiper
        class="swiper"
        :modules="modules"
          :slides-per-view="2"
          :space-between="20"
           navigation
          :pagination="{ clickable: true }"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <swiper-slide>
            <div class="education-price">
              <div class="education-price__card">
                <div class="education-price__card__img">
                  <h1>Standart</h1>
                  <p>5000 грн.</p>
                </div>
                <ul class="education-price__list">
                  <li>
                    <img src="images/check.svg" alt="" />
                    <span>Доступ к видео урокам</span>
                  </li>
                  <li>
                    <img src="images/check.svg" alt="" />
                    <span>Онлайн чат</span>
                  </li>
                  <li>
                    <img src="images/check.svg" alt="" />
                    <span>Практическое занятие</span>
                  </li>
                  <li>
                    <img src="images/check.svg" alt="" />
                    <span>Домашнее задание</span>
                  </li>
                  <li>
                    <img src="images/x.svg" alt="" />
                    <span>Бронирование места</span>
                  </li>
                </ul>
                <button>Оплатить</button>
              </div>
              <p class="education-price__bottom">
                При оплате всего курса сразу
              </p>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="education-price">
              <div class="education-price__card">
                <div
                  class="
                    education-price__card__img education-price__card__img-right
                  "
                >
                  <h1>Standart</h1>
                  <p>5250 грн.</p>
                </div>
                <ul class="education-price__list">
                  <li>
                    <img src="images/check.svg" alt="" />
                    <span>Доступ к видео урокам</span>
                  </li>
                  <li>
                    <img src="images/check.svg" alt="" />
                    <span>Онлайн чат</span>
                  </li>
                  <li>
                    <img src="images/check.svg" alt="" />
                    <span>Практическое занятие</span>
                  </li>
                  <li>
                    <img src="images/check.svg" alt="" />
                    <span>Домашнее задание</span>
                  </li>
                  <li>
                    <img src="images/check.svg" alt="" />
                    <span>Бронирование места</span>
                  </li>
                </ul>
                <button>Оплатить</button>
              </div>
              <p class="education-price__bottom">
                При бронировании места. Стоимость брони 250 гривен, стоимость
                курса оплачивается перед первым занятием
              </p>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script>
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default {
  name: "EduPriceComponent",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
};
</script>

<style scoped>
.swiper{
  max-width: 700px;
  padding: 0px 40px 30px;
}
.swiper-button-next:after,
.swiper-button-prev:after
{
  color: #fff;
}
</style>