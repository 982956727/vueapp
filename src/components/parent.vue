<template>
  <div>
      <span>我是父组件</span>------{{fromSonMsg}}
      ------------我是父组件中拿到的全局状态{{getNum}}
      <button @click="padd">父组件----改变状态按钮</button>
      <button @click="paddaction">父组件----改变状态按钮(action)</button>
      <hr>
      <!-- 动态msg加v-bind或者:,在父组件里面渲染子组件 -->
      <son :msg="toSonMsg" @handle="getMsgFromSon"></son>
  </div>
</template>

<script>
  // 引入son组件
  import son from './son'

  export default {
      name:'parent',
      data:function() {
        return {
          toSonMsg:'我是你的父亲',
          fromSonMsg:''
        }
      },
      components:{
        //使用son组件
        son
      },
      methods:{
        // value就是使用$emit触发事件的时候接收的参数
        getMsgFromSon:function(value) {
            this.fromSonMsg = value
        },
        padd() {
          this.$store.commit('increase')
        },
        paddaction() {
          this.$store.dispatch('decreaseAction')
        }
      },
      computed: {
        getNum: function () {
          //第三步：通过this.$store.state.XXX直接拿到需要的数据
          // return this.$store.state.num

          return this.$store.getters.getNum;
        }
    }
  }
</script>

<style scoped>

</style>