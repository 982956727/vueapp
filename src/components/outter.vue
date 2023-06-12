<template>
  <div>
      我是outter组件拿到的全局状态:{{ getOutterCount }}<br>
      <button @click="oadd">outter件----改变状态按钮</button>
      <button @click="oaddaction">outter件----改变状态按钮(action)</button>
  </div>
</template>

<script>
  
  export default {
      name:"outter",
      computed: {
        getOutterCount: function () {
          //第三步：通过this.$store.state.XXX直接拿到需要的数据
          return this.$store.state.num
       },
    },
    methods: {
      oadd() {
        this.$store.commit('increase')
      },
      oaddaction() {
        this.$store.dispatch('decreaseAction')
      }
  }

  }
</script>

<style scoped>

</style>