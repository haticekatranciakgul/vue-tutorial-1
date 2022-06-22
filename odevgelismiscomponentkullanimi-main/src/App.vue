<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <br>
                <button @click="selectedComponent = 'appBlue'" class="btn btn-primary">Mavi Temayı Yükle</button>
                <button @click="selectedComponent = 'appGreen'" class="btn btn-success">Yeşil Temayı Yükle</button>
                <button @click="selectedComponent = 'appBlue'" class="btn btn-danger">Kırmızı Temayı Yükle </button>
                <hr>
                <component :is="selectedComponent">
                    <h3> {{ selectedComponent }}  </h3>
                    <p>İçerik...</p>
                </component>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue';
    import Green from './components/Green';
    import Red from './components/Red';

    export default {
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        },
        data : function() {
           return {
                selectedComponent : "appBlue",

           }
        },
    }
</script>

<style>
</style>
