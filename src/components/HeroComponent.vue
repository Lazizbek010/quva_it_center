<template>
  <div class="bg-hero">
    <div class="container hero" v-if="getMainList && getMainList.length">
      <div class="hero__left">
        <h1>{{getMainList[0].title}}</h1>
        <p>
          {{getMainList[0].description}}
        </p>
        <div class="hero__btns">
          <button>Записаться на курс</button>
          <button>Узнать больше</button>
        </div>
      </div>
      {{ data }}
      <div class="hero__right">
        <!-- Rasmni APIdan olish   -->
        <img  src="images/hero-img.png" alt="hero-img" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'HeroComponent',
    props: {
      getMainList: {
        type: Array,
        required: true
      },
    },
};
</script>

<style lang="scss" scoped>

</style>