<template>
  <div class="bg-prices">
    <div class="prices-shape"></div>
    <div class="container">
      <div class="prices">
        <div
          class="price"
          v-if="getMoreInfo && getMoreInfo.length"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div class="price-absolute">
            <img src="@/assets/img/bg-price1.png" alt="" />
          </div>
          <div class="price__info" v-for="(price, i) in getMoreInfo" :key="i">
            <h3>{{ price.title }}</h3>
            <p>
              {{ price.description }}
            </p>
          </div>
        </div>
        <!-- <div class="price">
              <div class="price__info">
                <h3>Сколько стоит курс?</h3>
                <p>
                  Стоимость полного курса с материалами и доступом в общий чат 5
                  000 грн
                </p>
              </div>
            </div>
            <div class="price"
            data-aos="fade-up"
            data-aos-duration="1800">
              <div class="price-absolute">
                <img src="@/assets/img/bg-price3.png" alt="">
              </div>
              <div class="price__info">
                <h3>Трудоустройство</h3>
                <p>20% студентов получат работу в агенстве</p>
              </div>
            </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PriceComponent",
  props: {
    getMoreInfo: {},
  },
};
</script>

<style lang="scss" scoped></style>