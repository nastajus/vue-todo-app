<template>
  <li>
    {{ text }} 
    <button @click="deleteMe">X</button>
  </li>

  <!-- <button @click=deleteMe></button> -->
  <!-- ERROR: The template root requires exactly one element.eslint-plugin-vue  -->

  <!-- v-bind = : , v-on = @  -->
</template>

<script>

export default {
  name: 'TodoItemThing',

  components: {},

  props: {
    text: {
      type: String,
      required: true
      //usually put either `required` or `default=str123`
    }
  },

  data () {
    return {
    }
  },

  computed: {
  }, 
  methods: {
      deleteMe() {
          ///HERE>
          
          //string what we want the event to be named, followed by parameters typically.
        this.$emit('remove')
      }
  },

}
</script>
