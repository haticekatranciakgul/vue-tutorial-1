<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Filter ve Mixin Sınavı </h3>
        <hr>
        <!-- Soru 1 -->
        <!-- Girmiş olduğunuz yazıyı tersten yazacak bir Filter tanımı yapınız ve bunu <p> içerisinde uygulayınız -->
        <p> {{ message | reverse }}</p>
        <!-- Soru 2 -->
        <!-- Global bir Filter tanımlayarak size kelime sayısını ve kelimeyi veren bir Filter tanımı yapınız -->
        <!-- Örneğin : "videosinif.com" => videosinif.com (14) Şeklinde çıktı vermelidir -->
        <p> {{ message | lengthCount }}</p>
        <hr>
        <!-- Soru 3 -->
        <!-- Soru 1 ve 2 deki uygulamaların aynısını Computed Property kullanarak yapınız -->
        <p> {{ reverse }}</p>
        <p> {{ lengthCount }}</p>
        <!-- Soru 4 -->
        <!-- 3.Uygulamadaki Computed Property'leri bir Mixin aracılığı ile tanımlayarak tekrardan kodlarınızı düzenleyiniz -->
      </div>
    </div>
  </div>
</template>
<script>
  import { computedMixins } from "./computedMixins";
  export default {
    mixins : [computedMixins],
    data(){
      return {
        message : "videosinif.com"
      }
    },
    filters : {
      reverse(value){
        return value.split("").reverse().join("");
      }
    },
  }
</script>
<style>

</style>
