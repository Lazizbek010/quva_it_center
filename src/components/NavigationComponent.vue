<template>
  <div class="nav">
    <div class="container navbar">
      <div class="logo">
        <img src="images/logo.svg" alt="logo" />
      </div>
      <div class="navbar__contact">
        <h3>
          <img v-if="getContactList" :src="`https://foritcenter.herokuapp.com/${getContactList.logo}`" >
          <span v-if="getContactList">{{getContactList.phone}}</span>
        </h3>
        <h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
          >
            <path
              stroke="#fff"
              stroke-linecap="square"
              d="m6 8.667 4 4 4-4M19.333 10A9.333 9.333 0 1 1 .667 10a9.333 9.333 0 0 1 18.666 0Z"
              opacity=".9"
            />
          </svg>
          <span>Записаться на курс</span>
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions} from 'vuex'

export default {
  name: "NAvigationComponent",
  computed: {
    ...mapGetters(["getContactList"]),
  },
  mounted() {
    this.fetchContacts();
  },
  methods: {
    ...mapActions(["fetchContacts"]),
  },
};
</script>

<style lang="scss" scoped></style>