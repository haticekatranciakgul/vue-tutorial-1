import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods : {
   sendToServerData(serverData){
     this.$emit("serverDataSent" , serverData );
   }
  }
});
new Vue({
  el: '#app',
  render: h => h(App)
})
