<template>
  <div class="hello">
     <parent></parent>
     <hr>
     <outter></outter>
  </div>
</template>

<script>
  //引入parent组件
  import parent from './parent'
  //引入outter组件
  import outter from './outter'

  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    //使用组件
    components:{
      parent,
      outter
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
