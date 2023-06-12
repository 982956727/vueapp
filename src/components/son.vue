<template>
  <div>
      <span>我是子组件</span>-----{{msg}} <br>
      --------我是全局状态:{{getNum}}
      <button @click="senMsgToFa">向父组件传递数据</button>
       -----<button @click="sadd">子组件----改变状态按钮</button>
       <button @click="saddaction">子组件----改变状态按钮(action)</button>
  </div>
</template>

<script>
  import parent from './parent'
  export default {
    name:'son',
    data:function() {
      return {
        toFatherMsg:'我是你的son'
      }
    },
    //使用props接收父组件传递过来的信息
    props:{
        msg:{
          type: String,
          default:''
        }
    },
    components:{
      parent
    },
    methods:{
      senMsgToFa:function() {
        // 用$emit触发一个事件,需要传递的数据this.XXX
        this.$emit('handle',this.toFatherMsg)
      },
        sadd() {
          this.$store.commit('increase')
      },
        saddaction() {
          this.$store.dispatch('decreaseAction')
        }
    },
    computed:{
      getNum:function() {
        //第三步：通过this.$store.state.XXX直接拿到需要的数据
          return this.$store.state.num
      }
    }
  }
</script>

<style scoped>

</style>