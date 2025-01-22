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
        
        onsubmitForm() {
            this.list.push(this.inputValue);
            this.inputValue = '';
        },
        deleteItem(i) {
            this.list.splice(i, 1);
        }
    },
    computed: {
        doubleCount() {
           return this.list.length * 2
        }
    },
    watch: {
        inputValue(value) {
            if(value.length > 10) {
                this.inputValue = '';
            }
        }
    },
    template: `
        <div>Hello</div>
    `
};

Vue.createApp(App).mount('#app');