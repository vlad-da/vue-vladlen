<template>
  <div class="card">
    <h3>{{ item }}</h3>
    <button class="btn" @click="open">
      {{ isNewOpen ? 'Закрыть' : 'Открыть' }}
    </button>
    <p v-if="isNewOpen">sdfsdfsdfsdfsdfsdfsdfsdfds</p>
    <button v-if="!wasRead" @click="readAction" class="btn">Прочесть новость</button>
  </div>
</template>

<script>
export default {
  name: 'CardItem',
  data() {
    return {
      isNewOpen: this.isOpen,
      isActive: true,
    }
  },
  methods: {
    open() {
      this.isNewOpen = !this.isNewOpen
      if (this.isNewOpen) {
        this.$emit('open-news')
      }
    },
    readAction() {
      this.isNewOpen = false
      this.$emit('read-action', this.id)
    },
  },

  props: {
    item: String,
    isOpen: Boolean,
    wasRead: Boolean,
    id: Number,
  },
}
</script>
