<template>
  <div>
    <input v-model="firstName"/>
    <input v-model="lastName"/>
    {{ fullName }}
  </div>
</template>

<script>
// const data = function () {
//   console.log(test)
// }

export default {
  //stuff goes here... umm 
  name: 'BindingExample',

  //stuff THIS DEPENDS ON (uses in <template>! )
  components: {},

  // props is passed in FROM PARENT
  props: {},

  // we dropped the colon to make it look like a function definition.
  //data is LOCAL to THIS component 
  //conventially reserved for "RAW" or "PRIMARY" 
  data () {
    return {
      firstName: 'John',
      lastName: 'Smith'
    }
  },
  //computed is ~like data, it's RETURNING stuff based on OTHER values.
  computed: {
    fullName () {
      return this.firstName + ' ' + this.lastName
    }
  }, 
  methods: {},

}
</script>
