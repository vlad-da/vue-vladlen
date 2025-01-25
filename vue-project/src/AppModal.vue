<template>
  <div class="container">
    <div class="modal">
      <h3>Modal window</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dignissimos quidem quo distinctio ratione obcaecati assumenda, laboriosam illum. Dolorem, accusantium?</p>
      <button class="btn" @click="$emit('close-modal')">Закрыть окно</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppModal',
}
</script>
