<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Filter ve Mixins</h3>
        <p> {{ message | toUppercase | toLowercase }} </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      message : "Selamlar kablosuzkedi | videosinif.com "
    }
  },
  filters : {
    toUppercase(value){
      return value.toUpperCase();

    }
  }

}
</script>

<style>

</style>
