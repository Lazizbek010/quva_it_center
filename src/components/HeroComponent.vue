<template>
  <div class="bg-hero">
    <swiper class="hero-swiper container"
      :modules="modules"
      :slides-per-view="1"
      :space-between="300"
      navigation
      :pagination="{ clickable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide class="container hero">
        <div
          class="hero__left"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1500"
        >
          <h1>Офлайн-курс по поисковым рекламным кампаниям в Google</h1>
          <p>
            Курс познакомит с Контекстной рекламой и Поисковыми кампаниями.
            Уникальная возможность выйти на приланс и работать из дому.
          </p>
          <div class="hero__btns">
            <button>Записаться на курс</button>
            <button>Узнать больше</button>
          </div>
        </div>
        <div
          class="hero__right"
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-duration="1500"
        >
          <img src="images/hero-img.png" alt="hero-img" />
        </div>
      </swiper-slide>
      <swiper-slide class="container hero">
        <div
          class="hero__left"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1500"
        >
          <h1>Офлайн-курс по поисковым рекламным кампаниям в Google</h1>
          <p>
            Курс познакомит с Контекстной рекламой и Поисковыми кампаниями.
            Уникальная возможность выйти на приланс и работать из дому.
          </p>
          <div class="hero__btns">
            <button>Записаться на курс</button>
            <button>Узнать больше</button>
          </div>
        </div>
        <div
          class="hero__right"
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-duration="1500"
        >
          <img src="images/hero-img.png" alt="hero-img" />
        </div>
      </swiper-slide>
      <swiper-slide class="container hero">
        <div
          class="hero__left"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1500"
        >
          <h1>Офлайн-курс по поисковым рекламным кампаниям в Google</h1>
          <p>
            Курс познакомит с Контекстной рекламой и Поисковыми кампаниями.
            Уникальная возможность выйти на приланс и работать из дому.
          </p>
          <div class="hero__btns">
            <button>Записаться на курс</button>
            <button>Узнать больше</button>
          </div>
        </div>
        <div
          class="hero__right"
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-duration="1500"
        >
          <img src="images/hero-img.png" alt="hero-img" />
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default {
  name: "HeroComponent",
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
  .hero-swiper{
    display: flex;
    justify-content: center;
  }
</style>