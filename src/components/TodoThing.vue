<template>
  <div class="todo-thing"> 
    <h1>{{ title }}</h1> 
    <p>
      <ul>
        <TodoItemThing 
          v-for="(item, index) in items"
          :key="item.id"
          :text="`id:${item.id} index:${index} - ${item.text}`"
          @remove="removeItem(item.id)"
          />
      </ul>
    </p>

    <input v-model="newText" />

    <button @click="addItem()" :disabled="!newText" > Add Item </button>

    <button @click="deleteLast()" :disabled="deleteLastDisabled"> Delete Last Item</button>
  </div>
</template>

<script>
import TodoItemThing from './TodoItemThing'

export default {
  name: 'TodoThing',

  components: { 
    TodoItemThing
  },

  props: {
    title: String
  },
  
  data () {
    return {
      idIndex: 4,
      items: [
        { id: 0, text: 'learn vue.js basics' },
        { id: 1, text: 'show alden old-school video game' },
        { id: 2, text: '????????' },
        { id: 3, text: 'PROFIT!!!' },
      ],
      newText: '',
    }
  },

  computed: {
    deleteLastDisabled () { 
      return !this.items.length
    }
  },

  methods: {
    addItem () {
      this.items.push({
        id: this.idIndex++,
        text: this.newText
      })
      this.newText = "" 
    },

    removeItem (id) {
      console.log(id)

      //one way.. first only...
      // const index = this.items.findIndex(item => item.id === id)
      // if (index === -1) { return }
      // this.items.splice(index, 1)

      //since js moving to more functional world
      // filter ~= more aggresive ;) 
      this.items = this.items.filter(item => item.id !== id)
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
