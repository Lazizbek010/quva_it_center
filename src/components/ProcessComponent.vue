<template>
  <div class="process">
    <div class="container">
    <h1 class="process__title">Markazimiz va dars jarayonlari</h1>
      <swiper
      data-aos="zoom-in-up"
      data-aos-duration="1000"
        :effect="'cards'"
        :grabCursor="true"
        :modules="modules"
        class="mySwiper process__img"
      >
        <swiper-slide class="swiper-slide slide" v-for="(slide, i) in 10" :key="`slide${i}`">
          <img
            :src="`https://picsum.photos/700/450?random=${i}`"
            alt="" /></swiper-slide
        >
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";

export default {
  name: "ProcessComponent",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectCards],
    };
  },
};
</script>

<style scoped>
.swiper {
  width: 700px;
  height: 450px;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
  width: 700px;
  height: 450px;
}
.swiper-slide img{
    width: inherit;
    height: inherit;
    object-fit: cover;
}
</style>



