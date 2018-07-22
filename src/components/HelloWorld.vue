<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input v-model="newItem" v-on:keyup.enter="addNew">
    <ul>
      <li v-for="todoItem in todoItems" v-bind:key="todoItem.label" v-bind:class="{finished: todoItem.isFinished}"
        v-on:click="toggleFinish(todoItem)">
        {{todoItem.label}}
      </li>
    </ul>
  </div>

</template>

<script>

import Store from './store'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Todo List - 待办事项',
      todoItems: Store.fetch(),
      newItem: ''
    }
  },
  watch: {
    todoItems: {
      handler: function (items) {
        Store.save(items);
      },
      deep: true
    }
  },
  methods: {
    toggleFinish: function (item) {
      item.isFinished = !item.isFinished;
    },
    addNew: function () {
      this.todoItems.push({
        label: this.newItem,
        isFinished: false
      });
      this.newItem = '';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  height: 30px;
}
a {
  color: #42b983;
}
.finished {
  text-decoration: underline;
}
</style>
