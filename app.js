let app = Vue.createApp({
    data() {     // returns an object of data
        return {
            title: 'Events: Vue.js v3 Todo List',
            todoList: [],
            newJob: "",
            showTable: false
        }
    },
    methods: {    // an object of functions (methods)
        add_todo() {
            this.showTable = true
            this.todoList.push({job: this.newJob, done: false})
            this.newJob = ""
        },
        delete_todo() {
               
            if(this.todoList.length > 0) {
                this.todoList = this.todoList.filter((item) => item.done == false)
            }

            if(this.todoList.length <= 0) {
                this.showTable = false
            }
                
        }
    }
})

app.mount('#main')   //in which div to mount the vue app

// other event modifiers:  click.right (right mouse button), click.prevent.stop (preventDefault + stop event bubble)