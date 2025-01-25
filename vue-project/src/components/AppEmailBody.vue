<template>
  <div>
    <h2>{{ email.theme }}</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi, cumque ea laborum laudantium nostrum odio quis soluta sunt velit?</p>
    <button class="btn">Закрыть</button>
  </div>
</template>

<script>
export default {
  inject:['emails'],
  props: ['id'],
  computed: {
    email() {
      return this.emails.find((item) => item.id === this.id)
    }
  }
}
</script>

<style scoped>

</style>
