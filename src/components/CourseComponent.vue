<template>
    <section class="bg-course">
      <div class="bg-course__shape1">
        <img src="@/assets/img/course-shape1.png" alt="">
      </div>
      <div class="bg-course__shape2">
        <img src="@/assets/img/course-shape2.png" alt="">
      </div>
        <div class="container" 
        data-aos="zoom-in-down"
         data-aos-duration="1500">
          <h2 class="footer__titles">Kursda nima bo'ladi?</h2>
          <div class="course-items" v-if="getHaveCourse">
            <div class="course-item" v-for="(item, i) in getHaveCourse" :key="i">
              <div class="course-item__top">
                <div class="course-item__top__triangle">
                  <img src="images/course-item__top__triangle.png" alt="">
                </div>
                <div class="course-item__top__shape"></div>
                <h3>{{item.title}}</h3>
              </div>
              <p>
               {{item.description}}
              </p>
            </div>
          </div>
        </div>
      </section>
</template>

<script>
    export default {
        name: 'Coursecomponent',
        props: {
          getHaveCourse: {}
        },
    }
</script>

<style lang="scss" scoped>

</style>