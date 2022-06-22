export const computedMixins = {
  computed : {
    reverse(){
      return this.message.split("").reverse().join("");
    },
    lengthCount(){
      return this.message + " (" + this.message.length + ")";
    }
  }
}
