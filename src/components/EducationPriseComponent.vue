<template>
    <section class="bg-education-price">
        <div class="container" v-if="getCostEdu">
          <h2 class="footer__titles" v-if="eduData && eduData.title">{{eduData.title}}</h2>
            <p class="education-price-discount" v-if="eduData && eduData.description">{{eduData.description}}</p>
          <div class="education-prices"
          data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000">
        <!-- <swiper
        class="swiper"
        :modules="modules"
          :slides-per-view="2"
          :space-between="20"
           navigation
          :pagination="{ clickable: true }"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        > -->
        <swiper-slide>
            <div class="education-price">
              <h1>{{eduData}}</h1>
              <div class="education-price__card">
                <div class="education-price__card__img">
                  <div class="education-price__card__header">
                    <h1 v-if="data && data.title">{{data.title}}</h1>
                    <span v-if="data && data.title" class="subtitle">{{data.subTitle}}</span>
                  </div>
                  <p v-if="data && data.price">{{data.price}}</p>
                </div>
                <ul class="education-price__list" v-if="roles">
                  <li v-for="(role, i) in data.roles" :key="i">
                    <img src="images/check.svg" alt="">
                    <span>{{role.text}}</span>
                  </li>
                  <!-- <li>
                    <img src="images/check.svg" alt="">
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
                  </li> --> 
                </ul>
                <button>Оплатить</button>
              </div>
              <p class="education-price__bottom" v-if="description">{{data.description}}</p>
            </div>
            </swiper-slide>
          <!-- <swiper-slide>
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
              <p class="education-price__bottom">При бронировании места. Стоимость
брони 250 гривен, стоимость курса
оплачивается перед первым занятием</p>
            </div>
             </swiper-slide> -->
        <!-- </swiper> -->
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
        name: 'EduPriceComponent',
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

      props: {
        getCostEdu: {}
      },
      computed: {
        eduData() { 
          return this.getCostEdu[0]
        }
      },
    }
</script>

<style lang="scss" scoped>
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