<template>
  <div class="container">
    <div class="col-md-6 col-md-offset-3">
      <h3>Directive Sınavı</h3>
      <!-- Soru -->
      <!-- Event'leri dinleyecek v-on gibi çalışan bir Directive geliştiriniz. -->
      <button v-custom-on:click="clicked" class="btn btn-success">Tıkla</button>

      <div class="customOn" v-custom-on:mouseleave="mouseleave" v-custom-on:mousemove="mousemove"></div>

    </div>
  </div>
</template>

<script>
export default {
  directives : {
    customOn : {
      bind(el,binding){
        //  el.onclick = function(){
        //   binding.value();
        // }
        const type = binding.arg;
        const fn = binding.value;
        el.addEventListener(type, fn);
      }
    }
  },
  methods : {
    clicked(){
      alert("Tıklandı.....!!");
    },
    mousemove(){
      console.log("MouseMove");
    },
     mouseleave(){
      console.log("mouseleave");
    }
  }
}
</script>

<style>
.customOn{
  width: 100px;
  height: 100px;
  border: 1px dashed #666;

}


</style>
