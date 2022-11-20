<template>
    <div class="bg-about">
        <div class="about">
          <h1 class="about__title">Кому подойдет этот курс?</h1>
          <div class="about__info">
            <AboutComponentCard 
              v-for="(data, i) in getForCourse"
              :key="i"
              :data="data"
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