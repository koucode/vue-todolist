<template>
  <div class="todolist">
    <h1>{{ msg }}</h1>
    <input v-model="newItem" v-on:keyup.enter="addNew">
    <h2>未完成</h2>
    <ul>
      <li v-for="todoItem in todoItems" v-bind:key="todoItem.label" v-if="todoItem.isFinished"
        v-on:click="toggleFinish(todoItem)">
        {{todoItem.label}}
      </li>
    </ul>
    <h2>已完成</h2>
    <ul>
      <li v-for="todoItem in todoItems" v-bind:key="todoItem.label" v-if="!todoItem.isFinished" class="finished"
        v-on:click="toggleFinish(todoItem)">
        {{todoItem.label}}
      </li>
    </ul>
    <counter></counter>
    <!-- <button-counter></button-counter> -->
  </div>
</template>

<script>

import Store from './store'
import Counter from '@/components/counter'
// import ButtonCounter from '@/components/button-counter'

export default {
  name: 'TodoList',
  components: {
    Counter
  },
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
  created: function () {
    // console.log('todoItems is: ' + this.todoItems)
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
