<template>
  <div id="app">
    <!-- parent to child communication / binding --> 
    <TodoThing :title="title2" />  <!-- fromerly:  title="Ian's Sweet List" -->
  </div>
</template>

<script>
import TodoThing from './components/TodoThing.vue'

export default {
  name: 'App',
  components: {
    TodoThing   //this is "registering" Hell in "comp"
                 //allowing <TodoThing...> to work in temp
  },
  //DATA IS A FUNCITON!!! NOT AN OBJECT!! 
  //the "data key" refers to a function ... to communicate between components
  //es6 supports any name
  //"data" will return an object inside body of { }
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
