<template>
  <div id="counter">
    <button v-on:click="onClick">Add 1</button>
    <p>The button above has been clicked {{ counter }} times.</p>
  </div>
</template>

<script>

export default {
  name: 'Counter',
  data () {
    return {
      counter: 0
    }
  },
  methods: {
    onClick: function (item) {
      this.counter += 1;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
