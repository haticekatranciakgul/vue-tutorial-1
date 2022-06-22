<template>
  <div>
    <div class="form-group">
      <label>Ad bilgisi</label>
      <input type="text" class="form-control" :value="firstName" @input="nameChanged(true, $event)"/>
    </div>
    <div class="form-group">
      <label>Soyad bilgisi</label>
      <input type="text" class="form-control" :value="lastName" @input="nameChanged(false, $event)"/>
    </div>
  </div>
</template>

<script>
export default {
   props : ["value"],
   computed : {
       firstName(){
           return this.value.split(" ")[0];
       },
       lastName(){
           return this.value.split(" ")[1];
       }
   },
   methods : {
       nameChanged(isFirst, event){
           letFullname = "";
           if(isFirst){
               fullName = event.target.value + ' ' + this.lastName;
           }
           else {
               fullName = this.firstName +  ' ' + event.target.value;
           }

           this.value = fullName;
           this.$emit("input", this.value )
       }
   }
}
</script>
