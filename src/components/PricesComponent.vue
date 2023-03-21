<template>
  <div class="bg-prices">
    <div class="prices-shape"></div>
    <div class="container">
      <div class="prices"  v-if="getMoreInfo && getMoreInfo.length">
        <div
          class="price"
          data-aos="fade-up"
          data-aos-duration="1000"
         v-for="(price, i) in getMoreInfo" :key="i"
        >
          <div class="price-absolute">
            <img :src="price.bg_image" alt="" />
          </div>
          <div class="price__info">
            <h3>{{ price.title }}</h3>
            <p>
              {{ price.description }}
            </p>
          </div>
        </div>
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