<template>
  <div class="todo-thing"> 
    <h1>{{ title }}</h1> 
    <p>
      <ul>
        <li v-for="(item, index) in items" :key="index">{{ item }}</li>
      </ul>
    </p>
n
    <input v-model="newItem" />

    <button @click="addItem()" :disabled="!newItem" > Add Item </button>

    <button @click="deleteLast()" :disabled="deleteLastDisabled"> Delete Last Item</button>
  </div>
</template>

<script>
export default {
  name: 'TodoThing',

  props: {
    title: String
  },
  
  data () {
    return {
      items: [
        "learn vue.js basics",
        "show alden old-school video game",
        "????????",
        "PROFIT!!!"
      ],
      newItem: ""   //"" good, String bad!! (( in prop section))
    }
  },

  computed: {
    deleteLastDisabled () { 
      return !this.items.length
    }
  },

  methods: {
    addItem () {
      this.items.push(this.newItem)
      this.newItem = "" 
    },

    deleteLast () {
      this.items.splice(this.items.length-1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}
</style>
