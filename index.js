const App = {
    data() {
        return {
            title: 'Список заметок',
            myPlaceholder: 'Напиши заметку',
            inputValue: '',
            list: [],
        }
    },
    methods: {
        inputChangeHandle(e) {
            console.log(e.target.value);
            this.inputValue = e.target.value;
        },
        onsubmitForm() {
            this.list.push(this.inputValue);
            this.inputValue = '';
        }
    },
};

Vue.createApp(App).mount('#app');