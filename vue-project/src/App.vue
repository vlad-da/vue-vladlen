<template>
  <div class="container">
    <form class="card" @submit.prevent="createPearson">
      <h2>Работа с базой данных</h2>

      <div class="form-control">
        <label for="name">Введите имя</label>
        <input type="text" id="name" v-model.trim="name" />
      </div>

      <button class="btn primary" :disabled="name.length === 0">Создать человека</button>
    </form>
    <AppLoader v-if="load" />
    <AppList v-else :people="people" @load-list="loadPeople" @delete-pearson="deletPearson" />
  </div>
</template>

<script>
import AppList from './AppList.vue'
import axios from 'axios'
import AppLoader from './AppLoader.vue'
export default {
  data() {
    return {
      name: '',
      people: [],
      load: false,
    }
  },
  components: {
    AppList,
    AppLoader,
  },
  mounted() {
    this.loadPeople()
  },
  methods: {
    async createPearson() {
      const res = await fetch(
        ' https://vueproject-5ecf6-default-rtdb.europe-west1.firebasedatabase.app/people.json',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstName: this.name,
          }),
        },
      )
      const fire = await res.json()
      this.people.push({ firstName: this.name, id: fire.name })
      this.name = ''
    },

    async loadPeople() {
      this.load = true

      const { data } = await axios.get(
        'https://vueproject-5ecf6-default-rtdb.europe-west1.firebasedatabase.app/people.json',
      )
      const res = Object.keys(data).map((key) => {
        return {
          id: key,
          firstName: data[key].firstName,
        }
      })
      console.log(res)
      this.people = res
      this.load = false
    },

    async deletPearson(id) {
      await axios.delete(
        `https://vueproject-5ecf6-default-rtdb.europe-west1.firebasedatabase.app/people/${id}.json`,
      )
      this.people = this.people.filter((pers) => pers.id !== id)
    },
  },
}
</script>

<style></style>
