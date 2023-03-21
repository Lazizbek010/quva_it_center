<template>
  <div class="bg-hero" v-if="getMainList && getMainList.length">
   <div class="swiper-container">
     <swiper
      class="hero-swiper container"
      :loop="true"
      :modules="modules"
      :slides-per-view="1"
      :space-between="300"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }"
      navigation
      :pagination="{ clickable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide
        class="container hero"
        v-for="(slide, i) in getMainList" :key="i"
      >
        <div
          class="hero__left"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1500"
        >
          <h1>{{ slide.title }}</h1>
          <p>
            {{ slide.description }}
          </p>
          <div class="hero__btns">
           <a href="#register">
             <button>Kursga yozilish</button>
           </a>
           <a target="_blank" href="https://telegra.ph/IT-CENTER-QUVA-TUMANI-08-30">
            <button>Qo'shimcha ma'lumot</button>
           </a>
          </div>
        </div>
        <div
          class="hero__right"
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-duration="1500"
        >
          <!-- Rasmni APIdan olish   -->
          <img :src="slide.image" alt="hero-img" />
        </div>
      </swiper-slide>
    </swiper>
   </div>
  </div>
</template>

<script>
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default {
  name: "HeroComponent",
  props: {
    getMainList: {
      type: Array,
      required: true,
    },
  },
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
      modules: [Autoplay, Navigation, Pagination, Scrollbar, A11y],
    };
  },
};
</script>

<style scoped>
.hero-swiper {
  display: flex;
  justify-content: center;
}
</style>