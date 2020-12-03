<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{helloMessage}}</h2>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
      helloMessage: ''
    }
  },
  props: {
    msg: String
  },
  mounted() {
    this.$hello_api.getHelloMessage().then(resp =>{
      this.helloMessage = resp.message
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
