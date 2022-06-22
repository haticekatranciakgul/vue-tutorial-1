<template>
  <div class="container">
    <h3>Form Verileriyle Çalışmak</h3>
    <hr>
    <div class="row">
      <div class="col-md-6">
        <div class="panel panel-warning">
          <div class="panel-heading">
            <h4>Başvuru Formu</h4>
          </div>
          <div class="panel-body">
            <form>
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="email">Kullanıcı Adı</label>
                    <input type="text"
                           id="username"
                           class="form-control"
                           :value="userData.username"
                           @input="userData.username = $event.target.value">
                  </div>
                  <div class="form-group">
                    <label for="password">Şifre</label>
                    <input type="password"
                           class="form-control"
                           id="password"
                           v-model.lazy.trim="userData.password">
                  </div>
                  <div class="form-group">
                    <label for="age">Yaş</label>
                    <input type="number"
                           id="age"
                           class="form-control"
                           v-model.number.trim="userData.age">
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 form-group">
                  <label for="message">Açıklama</label><br>
                  <textarea
                    v-model="userData.message"
                    id="message"
                    rows="3"
                    class="form-control"></textarea>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label>
                      <input v-model="userData.interests" type="checkbox" value="yazilim"> Yazılım
                    </label>
                    <label>
                      <input v-model="userData.interests" type="checkbox" value="donanim"> Donanım
                    </label>
                  </div>

                </div>
              </div>
              <div class="row">
                <div class="col-md-12 form-group">
                  <label>
                    <input v-model="userData.gender" type="radio" value="erkek"> Erkek
                  </label>
                  <label>
                    <input v-model="userData.gender" type="radio" value="kadin"> Kadın
                  </label>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 from-group">
                  <label>Şehir</label>
                  <select v-model="userData.selectedCity" class="form-control">
                    <option
                      :selected="city == 'Antalya'"
                      v-for="city in userData.cities" :key="city"> {{ city }}</option>
                  </select>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 form-group">
                  <app-switch v-model="switched"></app-switch>
                </div>
              </div>
              <hr>
              <div class="row">
                <div class="col-md-12">
                  <button
                    @click.prevent="submit"
                    class="btn btn-primary">Gönder!
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-md-6" v-if="isSubmitted">
          <div class="panel panel-info">
            <div class="panel-heading">
              <h4>Form Verileri</h4>
            </div>
            <div class="panel-body">
              <p>Kullanıcı Adı: {{ userData.username }}</p>
              <p>Şifre: {{ userData.password}}</p>
              <p>Yaş: {{ userData.age }}</p>
              <p style="white-space: pre;">Açıklama: {{userData.message }} </p>
              <p><strong>İlgi Alanları</strong></p>
              <ul>
                <li v-for="item in userData.interests" :key="item"> {{ item }}</li>
              </ul>
              <p>Cinsiyet: {{ userData.gender }}</p>
              <p>Şehir: {{ userData.selectedCity }}</p>
              <p>Toggle: {{ switched }}</p>
            </div>
          </div>
      </div>
    </div>

  </div>
</template>

<script>
  import Switch from "./Switch";

  export default {
    components : {
      appSwitch : Switch
    },
    data(){
      return {
        userData : {
          username : '',
          password : '',
          age : 30,
          message : '',
          interests : [],
          gender : '',
          cities : ["İstanbul", "Ankara", "Antalya", "İzmir", "Bursa"],
          selectedCity : ''
        },
        switched : true,
        isSubmitted : false
      }
    },
    methods : {
      submit(){
        this.isSubmitted = true;
      }
    }
  }
</script>

<style>

</style>
