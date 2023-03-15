<template>
  <div class="nav" :class='{show: scroll}'>
    <div class="container navbar">
      <div class="logo">
        <img src="images/logo1.png" alt="logo" />
      </div>
      <div class="navbar__contact">
        <h3 v-if="getContactList">
          <img :src="getContactList.logo" >
          <span>{{getContactList.phone}}</span>
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
  data() {
    return {
      scroll: false
    }
  },
  computed: {
    ...mapGetters(["getContactList"]),
  },
  mounted() {
    this.fetchContacts();
    window.addEventListener('scroll', () => {
      if(window.scrollY > 200){
        this.scroll = true
      } else {
        this.scroll = false
      }
    })
  },
  methods: {
    ...mapActions(["fetchContacts"]),
  },
};
</script>

<style lang="scss" scoped>
.nav.show{
  backdrop-filter: blur(5px);
  background: rgba(113, 56, 226, 0.5);
}
</style>