new Vue({
  el: '#app',
  data:{
    newItem: '',
    todos: []
  },
  methods:{
    addItem:function(event){
      let todo ={
        item: this.newItem
      };
      this.todos.push(todo);
    }
  }
})
