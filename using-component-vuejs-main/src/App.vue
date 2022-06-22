<template>
<div class="container">
  <div class="row">
    <div class="col-md-6 col-md-offset-4">
      <app-memory>
        <h1 slot="heading">Güzel bir gün...</h1>
        <p slot="content">Bu çok güzel bir anıydı...  </p>
      </app-memory>
    </div>
  </div>
</div>
 
</template>

<script>
import Memory from "./Memory.vue";

export default {
  components : {
    appMemory : Memory 
  }
}




</script>

<style>

</style>
