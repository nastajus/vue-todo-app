<template>
  <div id="app">
    <!-- parent to child communication / binding --> 
    <TodoThing :title="title2" /> 
  </div>
</template>

<script>
import TodoThing from './components/TodoThing.vue'

export default {
  name: 'App',
  components: {
    TodoThing   //this is "registering" Hell in "comp"
  },
  //DATA IS A FUNCITON!!! NOT AN OBJECT!! 
  data  () { 
    return { 
      title2: "Ian's SECOND Sweet List"
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;  -- bullet fudges */ 
  color: #2c3e50;
  margin-top: 60px;
}
</style>
