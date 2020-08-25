<template>
  <li>{{ text }}</li>
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
  methods: {},

}
</script>
