<template>
  <header>
    <TheHeader />
  </header>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
export default {
  name: 'App',
  components: {
    TheHeader,
  },
}
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
</style>
