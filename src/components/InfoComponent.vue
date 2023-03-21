<template>
     <div class="bg-info">
        <div class="container">
          <div class="info__title">Kursda nimani o'rganasiz?</div>
          <div class="info" v-if="learnData">
            <div class="info__left"
             data-aos="fade-right"
            data-aos-offset="300"
            data-aos-duration="1000"
            data-aos-easing="ease-in-sine">
              <div class="info__left__text">
                <h5>{{learnData.title}}</h5>
                <p>
                  {{learnData.description}}
                </p>
              </div>
              <div class="info__left__img">
                <img :src="learnData.image" alt="" />
              </div>
            </div>
            <div class="info__right"
             data-aos="zoom-in-up"
              data-aos-duration="1000">
              <ul class="info__right__list">
                <li v-for="(list, i) in learnData.info" :key="i">
                  <img :src="list.icon" alt="ic" />
                  <span>{{list.text}}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
    export default {
      name: 'InfoComponent',
      props: {
        getLearnCourse: {}
      },
      computed: {
        learnData() {
          return this.getLearnCourse
        }
      },
    }
</script>

<style lang="scss" scoped>

</style>