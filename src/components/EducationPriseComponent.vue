<template>
  <section class="bg-education-price">
    <div class="container" v-if="getCostEdu">
      <h2 class="footer__titles">
        Ta'lim narxi
      </h2>
      <p class="education-price-discount">
       Talabalarning yengillik yaratish maqsadida ayrim kurslarni chegirma asosida o'qish imkoniyati mavjud.
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
          <swiper-slide v-for="(eduData, i) in getCostEdu" :key="i">
            <div class="education-price">
              <div class="education-price__card">
                <div class="education-price__card__img">
                  <div class="education-price__card__header">
                    <h1>{{ eduData.title }}</h1>
                    
                  </div>
                  <p>{{ eduData.price }}</p>
                </div>
                <ul class="education-price__list">
                  <li v-for="role in eduData.roles" :key="role.id">
                    <img src="images/check.svg" alt="" />
                    <span>{{ role.text }}</span>
                  </li>
                </ul>
                <button>To'lash</button>
              </div>
              <p class="education-price__bottom">
                {{ eduData.description }}
              </p>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script>
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
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

  props: {
    getCostEdu: [],
  },
};
</script>

<style lang="scss" scoped>
.swiper {
  max-width: 700px;
  padding: 0px 40px 30px;
}
.swiper-button-next:after,
.swiper-button-prev:after {
  color: #fff;
}
</style>