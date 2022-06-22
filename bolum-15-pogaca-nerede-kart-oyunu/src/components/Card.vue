<template>
  <div class="card">
    <img :src="card.image" alt="">
  </div>
</template>
<script>
  export default{
    props : ["card"]
  }
</script>
<style scoped>
  .card{
    width: 200px;
    height: 232px;
    border-radius: 5px;
    border: 1px solid #666;
    transition: box-shadow .5s;
    margin-left: 15px;
  }

  .card:first-child{
    margin-left: 0px;
  }

  .card:hover{
    box-shadow: 0px 5px 48px #666;
    transition: box-shadow .5s;
  }

  .card img{
    width: 100%;
    height: 100%;
  }
</style>
