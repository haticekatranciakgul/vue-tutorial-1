<template>
  <div>
      <h1>New Memory componenti...</h1>
      <button @click="counter++">Arttır!!</button>
      <p> {{ counter }}</p>
  </div>
</template>

<script>
export default {
    data: function(){
        return {
            counter : 0
        }
    },
    destroyed(){
        console.log("destroyed!!!")
    },
    activated(){
        console.log("Activated!!")
    },
    deactivated(){
        console.log("DeActivated!!")
    }
};
</script>

<style scoped>
</style>