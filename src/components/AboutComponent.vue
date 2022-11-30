<template>
    <div class="bg-about">
        <div class="about">
          <div class="about-shape1">
            <img src="@/assets/img/formshape1.png" alt="">
          </div>
          <div class="about-shape2">
            <img src="@/assets/img/formshape2.png" alt="">
          </div>
          <h1 class="about__title">Кому подойдет этот курс?</h1>
          <div class="about__info">
            <AboutComponentCard 
              v-for="(data, i) in getForCourse"
              :key="i"
              :data="data"
              data-aos="fade-up" 
            :data-aos-duration="i*500 + 1000"
            />
          </div>
        </div>
      </div>
</template>

<script>
    import AboutComponentCard from '@/components/AboutComponentCards.vue'
    export default {
      name: 'AboutComponent',
      components: {AboutComponentCard},
      props: {
        getForCourse: {
          type: Array,
          required: true
        },
      },
    }
</script>

<style lang="scss" scoped>

</style>