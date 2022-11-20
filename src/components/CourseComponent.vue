<template>
    <section class="bg-course">
        <div class="container">
          <h2 class="footer__titles">Что будет на курсе?</h2>
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
            <!-- <div class="course-item">
              <div class="course-item__top">
                <div class="course-item__top__triangle">
                  <img src="images/course-item__top__triangle.png" alt="">
                </div>
                <div class="course-item__top__shape"></div>
                <h3>Практические занятия</h3>
              </div>
              <p>
                Участвуете в создании поисковой рекламной кампании. Получаете
                индивидуальное задание
              </p>
            </div>
            <div class="course-item">
              <div class="course-item__top">
                <div class="course-item__top__triangle">
                  <img src="images/course-item__top__triangle.png" alt="">
                </div>
                <div class="course-item__top__shape"></div>
                <h3>Теоретические занятия</h3>
              </div>
              <p>Вы присутствуете на лекциях, получаете новые знания и опыт</p>
            </div>
            <div class="course-item">
              <div class="course-item__top">
                <div class="course-item__top__triangle">
                  <img src="images/course-item__top__triangle.png" alt="">
                </div>
                <div class="course-item__top__shape"></div>
                <h3>Самостоятельная практика</h3>
              </div>
              <p>
                Делаете домашнее задание. Получаете обратную связь от
                преподавателя
              </p>
            </div> -->
          </div>
        </div>
      </section>
</template>

<script>
    export default {
        name: 'Coursecomponent',
        props: {
          getHaveCourse: []
        },
    }
</script>

<style lang="scss" scoped>

</style>