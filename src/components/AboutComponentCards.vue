<template>
  <div class="about__info__item">
    <div class="" v-if="data">
      <h2>{{ data.title }}</h2>
      <p>
        {{ data.description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {},
  },
};
</script>

<style lang="scss" scoped>
</style>