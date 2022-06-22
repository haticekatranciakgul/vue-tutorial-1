<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
     <app-server @click.native="sendToDetail(server)" v-for="server in servers" v-bind:key="server" :serverData="server"></app-server>
    </ul>
  </div>
</template>

<script>
import Server from "./Server";
import { eventBus } from "../../main";

export default {
  components : {
    appServer : Server
  },
  data : function () {
    return {
      servers : [
        { id : 1, status : "Kritik"},
        { id : 2, status : "Normal"},
        { id : 3, status : "Tehlikede"},
        { id : 4, status : "Bilinmiyor"}
      ]
    } 
  },
  methods : {
    sendToDetail(server){
      eventBus.sendToServerData(server);

    }
  }
}
</script>