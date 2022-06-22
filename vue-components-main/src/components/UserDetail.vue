<template>
  <div class="wcol-md-6">
    <h3>Child Component 1</h3>
    <p>Ben User.vue isimli Parent Component'in içerisindeki bir Child componentim</p>
    <p> Kullanıcı Adı : {{ name }} </p>
    <p> Kullanıcı Adı : {{ switchName() }} </p>
    <p> Kulllanıcı yaşı : {{ age }} </p>
    <button @click="sendToParent"> Veriyi Parent'a Gönder </button>
  </div>
</template>
<script>
import { eventBus } from "../main"
export default {
  props : {
    name : {
      type : String,
      required : true,
      default : "videosinif.com"
    },
    age : String
  },
  methods : {
    switchName(){
      return this.name.split("").reverse().join("")
    },
    sendToParent(){
      this.$emit("data", "kablosuzkedi" );
    }
  },
  created(){
    eventBus.$on("ageWasEdited", (age) =>{
      this.age = age;
    } ) 
  }
}
</script>
<style scoped>
  div {
    background-color: lightcoral;
    padding: 20px;
    border: 1px solid #666;
    display: inline-block;
  }
</style>
