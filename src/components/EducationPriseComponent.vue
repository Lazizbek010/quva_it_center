<template>
    <section class="bg-education-price">
        <div class="container" v-if="getCostEdu">
          <h2 class="footer__titles">{{eduData.title}}</h2>
            <p class="education-price-discount">{{eduData.description}}</p>
          <div class="education-prices">
            <div class="education-price" v-for="(data, i) in eduData.blocks" :key="i">
              <div class="education-price__card">
                <div class="education-price__card__img">
                  <div class="education-price__card__header">
                    <h1>{{data.title}}</h1>
                    <span class="subtitle">{{data.subTitle}}</span>
                  </div>
                  <p>{{data.price}}</p>
                </div>
                <ul class="education-price__list">
                  <li v-for="(role, i) in data.roles" :key="i">
                    <img src="images/check.svg" alt="">
                    <span>{{role.text}}</span>
                  </li>
                  <!-- <li>
                    <img src="images/check.svg" alt="">
                    <span>Онлайн чат</span>
                  </li>
                  <li>
                    <img src="images/check.svg" alt="">
                    <span>Практическое занятие</span>
                  </li>
                  <li>
                    <img src="images/check.svg" alt="">
                    <span>Домашнее задание</span>
                  </li>
                  <li>
                    <img src="images/x.svg" alt="">
                    <span>Бронирование места</span>
                  </li> -->
                </ul>
                <button>Оплатить</button>
              </div>
              <p class="education-price__bottom">{{data.description}}</p>
            </div>
            <!-- <div class="education-price">
              <div class="education-price__card">
                <div class="education-price__card__img education-price__card__img-right">
                  <h1>Standart</h1>
                  <p>5250 грн.</p>
                </div>
                <ul class="education-price__list">
                  <li>
                    <img src="images/check.svg" alt="">
                    <span>Доступ к видео урокам</span>
                  </li>
                  <li>
                    <img src="images/check.svg" alt="">
                    <span>Онлайн чат</span>
                  </li>
                  <li>
                    <img src="images/check.svg" alt="">
                    <span>Практическое занятие</span>
                  </li>
                  <li>
                    <img src="images/check.svg" alt="">
                    <span>Домашнее задание</span>
                  </li>
                  <li>
                    <img src="images/check.svg" alt="">
                    <span>Бронирование места</span>
                  </li>
                </ul>
                <button>Оплатить</button>
              </div>
              <p class="education-price__bottom">При бронировании места. Стоимость
брони 250 гривен, стоимость курса
оплачивается перед первым занятием</p>
            </div> -->
        </div>
        </div>
      </section>
</template>

<script>
    export default {
      name: 'EduPriceComponent',
      props: {
        getCostEdu: []
      },
      computed: {
        eduData() {
          return this.getCostEdu[0] 
        }
      },
    }
</script>

<style lang="scss" scoped>

</style>