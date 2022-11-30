<template>
     <div class="bg-info">
        <div class="container">
          <div class="info__title">Чему вы научитесь на курсе?</div>
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
                <img src="images/info-img.png" alt="" />
              </div>
            </div>
            <div class="info__right"
             data-aos="zoom-in-up"
              data-aos-duration="1000">
              <ul class="info__right__list">
                <li v-for="(list, i) in learnData.info" :key="i">
                  <img src="images/loading.png" alt="" />
                  <span>{{list.text}}</span>
                </li>
                <!-- <li>
                  <img src="images/loading.png" alt="" />
                  <span>Работать с аукционом Goolge</span>
                </li>
                <li>
                  <img src="images/loading.png" alt="" />
                  <span>Составлять хорошие обьявления</span>
                </li>
                <li>
                  <img src="images/loading.png" alt="" />
                  <span>Стратегиям назначения ставок</span>
                </li>
                <li>
                  <img src="images/loading.png" alt="" />
                  <span>Находить креативные решения для продвижения</span>
                </li>
                <li>
                  <img src="images/loading.png" alt="" />
                  <span
                    >Оптимизировать рекламные кампании и улучшать
                    результаты</span
                  >
                </li>
                <li>
                  <img src="images/loading.png" alt="" />
                  <span
                    >Работать с ключевыми словами и поисковыми запросами</span
                  >
                </li>
                <li>
                  <img src="images/loading.png" alt="" />
                  <span>Формировать конкурентные предложения</span>
                </li> -->
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