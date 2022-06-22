<template>
  <div class="container">
    <h1 class="text-center">Ürün Ekleme Uygulaması</h1>
    <hr>
    <div class="row">
      <div class="card offset-2 col-md-3">
        <div class="card-body tex-center d-flex align-items-center flex-column">
          <img height="128" class="img-responsive text-center mb-3"
               :src="product.selectedImage == null ? '/src/assets/default.png' : product.selectedImage">
          <input ref="file" type="file" style="display: none;" @change="onChange($event)" class="form-control">
          <button class="btn btn-outline-secondary " type="button" @click="$refs.file.click()">Resim Seç</button>
        </div>
      </div>
      <div class="col-md-5">
        <div class="col-md-11 card">
          <div class="card-body">
            <div class="form-group">
              <label>Ürün Adı</label>
              <input type="text" class="form-control" placeholder="adını giriniz">
            </div>
            <div class="row">
              <div class="form-group col-md-6">
                <label>Ürün Adeti</label>
                <input type="text" class="form-control" placeholder="adetini giriniz">
              </div>
              <div class="form-group col-md-6">
                <label>Ürün Fiyatı</label>
                <input type="text" class="form-control" placeholder="fiyatını giriniz">
              </div>
            </div>
            <button class="btn btn-outline-info btn-block">Ekle!</button>
          </div>
        </div>
      </div>
    </div>
    <br><br>
    <div class="progress">
      <div class="progress-bar bg-info" role="progressbar" style="width: 0%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
        0/10
      </div>
    </div>
    <br><br>
    <h3 class="text-center">Eklenen Ürünlerin Listesi</h3>
    <hr>
    <div class="row product-container">
      <div class="col-md-2 card">
        <img class="card-img-top" src="/src/assets/default.png" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <small>
            <strong>Adet : </strong> 1
          </small>
          <br>
          <small>
            <strong>Fiyat : </strong> 10
          </small>
          <br>
          <small>
            <strong>Tutar : </strong> 10
          </small>
        </div>
      </div>


    </div>

  </div>


</template>

<script>
  export default {
    data() {
      return {
        imageList: [],
        product : {
            selectedImage: null
        }
      }
    },
    methods: {
      onChange(e) {
        const file = e.target.files[0];
        this.product.selectedImage = URL.createObjectURL(file);
      }
    }
  }
</script>

<style>
  body {
    background-color: aliceblue;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .card{
    margin-right: 5px;
    margin-bottom: 5px;
  }

  .card:last-child{
    margin-right: 0px;
  }

  .col-md-2{
    max-width: 15.666667%!important;
  }

  .product-container{
    margin-left: 15px;
  }

</style>

