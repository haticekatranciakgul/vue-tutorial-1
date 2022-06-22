<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-4">
        <div class="mt-5">
          <button @click="selectedComponent = 'appMemory' " class="btn-sm btn btn-primary">appMemory</button>
          <button @click="selectedComponent = 'appNewMemory' " class="btn-sm btn btn-primary">appNewMemory</button>
          <button @click="selectedComponent = 'appAuthor' " class="btn-sm btn btn-primary">appAuthor</button>
        </div>
        <hr>
        <p> {{ selectedComponent }} </p>
        <hr>


        <keep-alive>
           <component :is="selectedComponent">
          <h1 slot="heading">Güzel bir gün...</h1>
          <p slot="content">Bu çok güzel bir anıydı...</p>
        </component>
        </keep-alive>
        
        <!-- <app-memory>
          <h1 slot="heading">Güzel bir gün...</h1>
          <p slot="content">Bu çok güzel bir anıydı...</p>
        </app-memory> -->
      </div>
    </div>
  </div>
</template>

<script>
import Memory from "./components/Memory.vue";
import NewMemory from "./components/NewMemory.vue";
import Author from "./components/Author.vue";

export default {
  data : function() {
    return {
      selectedComponent : "appMemory"
    }
  },
  components: {
    appMemory: Memory,
    appNewMemory: NewMemory,
    appAuthor: Author,
  },
};
</script>

<style>
</style>
