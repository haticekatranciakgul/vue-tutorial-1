<template>
  <div class="container">
    <h1>Parent Component (User)</h1>
    <p>Burası parent component yani herşeyin import edildiği component :)</p>
    <button @click="changeName"> Adımı değiştir! </button>
    <p>Child Component üzerinden gelen veri {{ childData }}:</p>
    <p> Kullanıcı Yaşı : {{ age }} </p>
    <hr>
    <div class="row">
      <app-user-detail :age="age" @data="childData = $event" :name="title"></app-user-detail>
      <app-user-edit @ageWasEdited="age = $event" :age="age" ></app-user-edit>
    </div>
  </div>
</template>
<script>
  import UserDetail from "./UserDetail";
  import UserEdit from "./UserEdit";
  export default {
    components : {
      appUserDetail : UserDetail,
      appUserEdit : UserEdit,
    },
    data : function(){
      return {
        title: "Melisa",
        childData : "",
        age :25
      }

    },
    methods : {
      changeName(){
        this.title = "Defne.."
      }
    }
  }
</script>

<style>
  div.container{
    margin-top: 30px;
    padding: 20px 40px;
    background-color: #6a8d99;
    border: 1px solid #666;
  }
  div.row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>
