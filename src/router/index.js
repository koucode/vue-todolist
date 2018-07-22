import Vue from 'vue'
import Router from 'vue-router'
import TodoList from '@/components/todolist'
import Counter from '@/components/counter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TodoList',
      component: TodoList
    }, {
      path: '/counter',
      name: 'Counter',
      component: Counter
    }
  ]
})
