import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods : {
    data : {

    },
    changeAge(age){
      this.$emit("ageWasEDited", age )
    } 
  }
});


new Vue({
  el: '#app',
  render: h => h(App)
})
