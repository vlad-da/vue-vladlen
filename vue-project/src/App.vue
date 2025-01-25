<template>
  <div class="container">
    <div class="card">
      sdfdsfdsf
      <button class="btn" @click="modal = true"
     >Открыть модальное окно</button>
    </div>

    <AppModal v-if="modal" @close-modal="modal = false"/>
  </div>
</template>

<script>
import AppModal from './AppModal.vue'
export default {
  name: 'App',
  data() {
    return {
      modal: false
    }
  },
  components: {
    AppModal
  }
}
</script>
