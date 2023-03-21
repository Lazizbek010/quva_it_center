<template>
  <div class="bg-instructor" v-if="getCourseInstruktor">
    <div class="instructor-shape"></div>
    <h2 class="instructor__title">Bizning Ustozlar!</h2>
    <swiper :navigation="true" :modules="modules" class="insSwiper">
      <swiper-slide
        class="ins__slide"
        v-for="(slide, i) in getCourseInstruktor"
        :key="`ins__slide${i}`"
      >
        <div class="instructor__info container" >
          <div
            class="instructor__info__text"
            data-aos="zoom-in-right"
            data-aos-duration="1700"
          >
            <h4>{{ getCourseInstruktor.name }}</h4>
            <div class="instructor__info__line"></div>
            <h6>{{ getCourseInstruktor.position }}</h6>
            <h5>{{ getCourseInstruktor.level_info }}</h5>
            <p class="instructor__info__stars">
              <span>*</span>
              <span>*</span>
              <span>*</span>
            </p>
            <p class="instructor__info__contects">
              {{ getCourseInstruktor.description }}
            </p>
          </div>
          <div
            class="instructor__info__img"
            data-aos="fade-up-left"
            data-aos-duration="1700"
          >
            <img src="images/instructor-img.png" alt="" />
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

export default {
  name: "Instructorcomponent",
  props: {
    getCourseInstruktor: [],
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>



