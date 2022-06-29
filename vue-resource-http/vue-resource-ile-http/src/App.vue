<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Vue-Resource</h3>
        <div class="form-group">
          <input type="text" class="form-control" v-model="userName" >
        </div>
        <button class="btn btn-primary" @click="saveUser">Kaydet</button>
        <button class="btn btn-success" @click="getUsers">Verileri Getir</button>
        <hr>
        <ul class="list-group">
          <li class="list-group-item" v-for="user in userList"  > {{ user.userName }} </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      userName : null,
      userList: []
    }
  },
  methods: {
    saveUser(){
      this.$http.post("", { userName : this.userName })
      .then((response) => {
        console.log(response);
      })
    },
    getUsers(){
      this.$http.get("")
      .then((response)=> {
        // console.log(response.data);
        let data = response.data;
        for(let key in data)
        // console.log(data[key]);
        this.userList.push(data[key]);
      })
    }
  },
}
</script>

<style>
</style>
