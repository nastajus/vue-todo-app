<template>
  <div id="app">
    <TodoThing title="Ian's Sweet List"/>
  </div>
</template>

<script>
import TodoThing from './components/TodoThing.vue'

export default {
  name: 'App',
  components: {
    TodoThing   //this is "registering" Hell in "comp"
                 //allowing <TodoThing...> to work in temp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
