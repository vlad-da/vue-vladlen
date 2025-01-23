<template>
  <div class="container">
    <form class="card" @submit.prevent="submitForm">
      <h1>Анкета на Vue разработчика!</h1>
      <div class="form-control">
        <label for="name">Как тебя зовут?</label>
        <input v-model="name" type="text" id="name" placeholder="Введи имя">
      </div>

      <div class="form-control">
        <label for="age">Выбери возраст</label>
        <input v-model.number="age" type="number" id="age" value="20">
      </div>

      <div class="form-control">
        <label for="city">Твой город</label>
        <select v-model="city" id="city">
          <option value="spb">Санкт-Петербург</option>
          <option value="msk">Москва</option>
          <option value="kzn">Казань</option>
          <option value="nsk">Новосибирск</option>
        </select>
      </div>

      <div class="form-checkbox">
        <span class="label">Готов к переезду в Токио?</span>
        <div class="checkbox">
          <label><input type="radio" name="trip" v-model="goTo" value="yes"/> Да</label>
        </div>

        <div class="checkbox">
          <label><input type="radio" name="trip" v-model="goTo" value="no"/> Нет</label>
        </div>
      </div>

      <div class="form-checkbox">
        <span class="label">Что знаешь во Vue?</span>
        <div class="checkbox">
          <label><input type="checkbox" v-model="checks" name='country' value="japan"/> Vuex</label>
        </div>
        <div class="checkbox">
          <label><input type="checkbox" v-model="checks" name='country' value="russia"/> Vue CLI</label>
        </div>
        <div class="checkbox">
          <label><input type="checkbox" v-model="checks" name='country' value="usa"/> Vue Router</label>
        </div>
      </div>

      <button type="submit" class="btn primary">Отправить</button>
    </form>
  </div>
</template>

<script>

export default {
  data() {
    return {
      name: '',
      age: 22,
      city: 'spb',
      goTo: null,
      checks: []
    }
  },
  methods: {
    submitForm() {
      console.log(this.name);
      console.log(this.age);
      console.log(this.city);
      console.log(this.goTo);
      console.log(this.checks);
    }
  }
}

</script>
