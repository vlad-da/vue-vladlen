<template>
  <div v-if="people.length !== 0">
    <div class="card" v-for="pearson in people" :key="pearson.id">
      <hr />
      {{ pearson.firstName }}
      <button class="danger" @click="$emit('delete-pearson', pearson.id)">удалить</button>
    </div>
  </div>
  <div class="card" v-else>
    людей пок нет
    <button class="btn" @click="$emit('load-list')">загрузить</button>
  </div>
</template>

<script>
export default {
  name: 'AppList',
  props: {
    people: Array,
  },
}
</script>

<style lang="scss" scoped></style>
