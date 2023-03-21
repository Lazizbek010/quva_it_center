<template>
    <div class="bg-service">
      <div class="service-shape"></div>
        <div class="container service" v-if="getCourseProgram"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
            data-aos-duration="1000">
          <h1 class="service__title" v-if="dataCourse">{{dataCourse.title}}</h1>
          <p class="service__text" v-if="dataCourse">
           {{dataCourse.description}}
          </p>
          <ul class="service__list" v-if="dataCourse">
            <li class="service__list__item"
            v-for="(module, i) in dataCourse.modules" :key="i">
              <div class="service__list__item-left">
                <span>{{module.module_number}} модуль</span>
                <span class="service__list__item-left-about">{{module.module_text}}</span>
              </div>
              <div>
                <img src="images/down.svg " alt="" />
              </div>
            </li>
          </ul>
        </div>
      </div>
</template>

<script>
    export default {
      name: 'ServiceComponent',
      props: {
        getCourseProgram: {}
      },
      computed: {
        dataCourse() {
          return this.getCourseProgram[0] 
        }
      },
    }
</script>

<style lang="scss" scoped>

</style>