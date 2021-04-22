new Vue({
  el: '#app',
  data:{
    newItem: '',
    todos: []
  },
  methods:{
    addItem:function(event){
      if(this.newItem=='') return;
      let todo ={
        item: this.newItem
      };
      this.todos.push(todo);
      this.newItem='';
    }
  }
})
