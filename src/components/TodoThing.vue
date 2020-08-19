<template>
  <div class="todo-thing"> <!--formerly 'hello'-->
    <h1>{{ title }}</h1> 
    <p>
      <ul>
        <!--we don't want item to be key for performance reasons. -->
        <li v-for="(item, index) in items" :key="index">{{ item }}</li>
      </ul>
    </p>
    <input v-model="newItem" />

    <!-- @ sign is for events ...--> 
    <!-- () is optional / unnecessary for no parameters -->  
    <!-- within vue ... not raw "button".. but augemented... instead it's bubbling up ... to  an emission event... (catching emission from component )--> 


    <button @click="addItem()" :disabled="!newItem" > Add Item </button>

    <!-- ~~single component binding in vue2~~ -->
    <!-- <button @click="deleteLast()" :disabled="!items.length"> Delete Last Item</button> -->

    <!-- definitely not have () brackets... since it's exposed as a VALUE NOT A FUNCTION!! -->
    <button @click="deleteLast()" :disabled="deleteLastDisabled"> Delete Last Item</button>
  </div>
</template>

<script>
export default {
  name: 'TodoThing',
  //what this component expects to receive from PARENT COMPONENTS... 

  //here in "props" we're `defining an interface`
  props: {
    title: String
  },
  
  //here in "data" we're ... just assigning data ... 

  // ~data~ is the "exception" that it "must" be a function...
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
    //vue checks.........the body... for references... smartly
    deleteLastDisabled () { 
      return !this.items.length
    }
  },

  // most ~things~ are methods.. 
  methods: {
    //javascript And Vue convention: SPACE for Defining Function/Meth 
    addItem () {
      //vue ~maybe~ deviates from ~normal~ javascript this...
      //~~any keys we create in data() are made available in methods()~~
      
      this.items.push(this.newItem)
      this.newItem = "" 
      //vue3 changes... something... with proxies... here...
    },

    deleteLast () {
      // if (this.items.length <= 0) return;  //obselete
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
