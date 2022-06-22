<template>
  <div class="container">
    <app-header></app-header>
    <hr />
    <div class="row">
      <app-servers></app-servers>
      <app-server-details></app-server-details>

      
     
    </div>
    <hr />
    <app-footer></app-footer>
   
  </div>
</template>

<script>
import Header from "./components/Common/Header.vue";
import Footer from "./components/Common/Footer.vue"
import Servers from "./components/Server/Servers.vue"
import ServerDetails from "./components/Server/ServerDetails.vue"

// export default {
//   components: {
//     "app-header": Header,
//     "app-footer": Footer,
//     "app-servers": Servers,
//     "app-server-details": ServerDetails,

//   },
// };
export default {
  components: {
    appHeader: Header,
    appFooter: Footer,
    appServers: Servers,
    appServerDetails: ServerDetails,

  },
};
</script>

<style>
</style>
