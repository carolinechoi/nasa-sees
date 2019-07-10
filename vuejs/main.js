var app = new Vue({
    el: '#app',
    data: {
        message: "Hello world! It's currently " + new Date().toLocaleDateString()
    }
})

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString(),
        seen: true
    }
})

var app3 = new Vue({
    el: '#for-directive',
    data: {
        list: [
            { name: 'St. Vincent' },
            { name: 'Beyonce' }
        ]
    }
})

var app4 = new Vue({
    el: '#button',
    data: {
        message: 'Hello Caroline!'
    },
    methods: {
        reverseMessage: function(){
            this.message = this.message.split('').reverse().join('')
        }
    }
})

var app5 = new Vue({
    el: '#inputs',
    data: {
        message: 'Enter something.'
    }
})

app3.list.push({ name: 'Billie Eilish '})

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var component = new Vue({
    el: '#component',
    data: {
        groceryList: [
            { id: 0, text: 'Vegetables' },
            { id: 1, text: 'Himalayan Salt' },
            { id: 2, text: 'Whatever else' }
        ]
    }
})