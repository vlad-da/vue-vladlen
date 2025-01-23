<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Актуальные новости {{ now }}</h2>
      <span>Открыто: {{ openRate }} | Прочитано: {{ readCount }}</span>
      <CardItem
        v-for="item in news"
        :key="item.id"
        :item="item.title"
        :is-open="item.isOpen"
        :id="item.id"
        :was-read="item.wasRead"
        @open-news="openRate++"
        @read-action="setReadCount"
      />
    </div>
  </div>
</template>
<script>
import CardItem from './CardItem.vue'
export default {
  name: 'TheHeader',
  components: {
    CardItem,
  },
  data() {
    return {
      title: 'НОвый заголовок',
      now: new Date().toLocaleDateString(),
      openRate: 0,
      readCount: 0,
      news: [
        {
          title: 'Это первая новость',
          id: 1,
          isOpen: false,
          wasRead: false,
        },
        {
          title: 'Это вторая новость',
          id: 2,
          isOpen: false,
          wasRead: false,
        },
      ],
    }
  },
  methods: {
    setReadCount(idx) {
      this.readCount++
      const index = this.news.findIndex((el) => el.id === idx)
      this.news[index].wasRead = true
    },
  },
}
</script>

<style></style>
