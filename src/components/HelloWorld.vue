<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <ul>
      <li v-for="item in items" :class="{finished: item.isFinished}">
        {{item.label}}
      </li>
    </ul>
  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'this is todo list app',
      items: [{
        label: 'coding',
        isFinished: false
      }, {
        label: 'walking',
        isFinished: true
      }]
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
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.finished {
  text-decoration: underline;
}
</style>
