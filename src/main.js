import Vue from 'vue'         //npm package.
import App from './App.vue'   //start via directory.
//build tool allows importing, eg Webpack or via part of Node.

Vue.config.productionTip = false

new Vue({
  render: h => h(App),    //options ~= configure/setup
}).$mount('#app')
