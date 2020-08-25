<template>
  <li>{{ text }}</li>
</template>

<script>

export default {
  name: 'TodoItemThing',

  components: {},

  props: {
    //if had "createdDate" and "accounts" and etc attributes passed down, then it can deserve to pass in the full object.
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
