<template>
    <div class="container">
        <form v-if="!isSubmitted">
            <div class="row" >
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 ">
                    <!-- Soru 1 -->
                    <!-- Aşağıdaki bilgileri içeren bir Üye Ol sayfası geliştiriniz. -->
                    <!-- Tam Adı (Ad + Soyad) -->
                    <!-- E-mail -->
                    <!-- Şifre -->
                    <!-- Cinsiyet (Kadın/Erkek) -->
                   <app-fullname v-model="fullname"></app-fullname>
                   
                    <div class="form-group">
                        <label>Email bilgisi</label>
                        <input type="text" class="form-control" v-model="email">
                    </div>
                    <div class="form-group">
                        <label>Şifre bilgisi</label>
                        <input type="password" class="form-control" v-model="password">
                    </div>
                    <div class="form-group">
                        <label>
                            <input class="mr-5" type="radio" v-model="gender" value="kadın" >Kadın
                        </label>
                         <label>
                            <input type="radio"  v-model="gender" value="erkek">Erkek
                        </label>
                    </div>
                    <button @click.prevent="submit" class="btn btn-primary">Kayıt Ol</button>

                    <!-- Soru 2 -->
                    <!-- Üye Ol formu, Submit EDİLMEDİĞİ SÜRECE ekranda gözükmelidir.-->
                    <!-- Üye Bilgileri Ekranı ise form Submit EDİLDİKTEN SONRA ekranda gözükecektir -->

                    <!-- Soru 3 -->
                    <!-- Yukarıdaki uygulamayı düzenleyerek Tam Ad (Ad + Soyad) alanı için bir Form Kontrol Elemanı üretiniz -->
                </div>
            </div>
        </form>
        <div v-else class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-info">
                    <div class="panel-heading">
                        <h4>Girdiğiniz Bilgier</h4>
                    </div>
                    <div class="panel-body">
                        <p>Tam Ad: {{ fullname}} </p>
                        <p>E-mail: {{ email }} </p>
                        <p>Şifre: {{ password }}</p>
                        <p>Cinsiyet: {{ gender }} </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Fullname from "./Fullname.vue"

    export default {
        components : {
            appFullname : Fullname,

        },
        data(){
            return{
              fullname: 'Hatice KATRANCI',
              email : '',
              password :'',
              gender : '',
              isSubmitted: false,
            }
        },
        methods: {
            submit(){
                 this.isSubmitted = true;
            }
        },
    }
</script>

<style>
</style>
