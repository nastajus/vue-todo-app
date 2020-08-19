<template>
  <div class="todo-thing"> <!--formerly 'hello'-->
    <h1>{{ title }}</h1> 
    <p>
    </p>
  </div>
</template>

<script>
export default {
  name: 'TodoThing',
  //what this component expects to receive from PARENT COMPONENTS... 
  props: {
    title: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
</style>
