<template>
  <div class="app">
    <navigation />
  </div>
  <router-view/>
</template>

<script>
import Navigation from "@/components/NavigationComponent.vue"

export default ({
  name: 'App',
   components: {
    Navigation
  },
})
</script>
