<template>
  <div class="col-xs-12 col-sm-6" v-if="Object.keys(server).length === 0">
    <p>Sunucu Bilgisi güncel değil!!</p>
  </div>
   <div class="col-xs-12 col-sm-6" v-else>
    <h3> Sunucu #{{ server.id }} </h3>
    <p> Sunucu Durumu : {{ server.status }} </p>
    <button class="btn btn-primary btn-xs" @click="changeServerStatus"> Durumu Düzelt </button>
  </div>
</template>
<script>
import {eventBus} from "../../main";

export default {
  data : function(){
    return  {
      server : {}
    }
  },
  methods : {
    changeServerStatus(){
      this.server.status = "Normal";
    }

  },
  created(){
    eventBus.$on("serverDataSent", (data) => {
      this.server = data;
    } )
  }

}
</script>