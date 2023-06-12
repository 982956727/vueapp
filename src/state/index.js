// 引入Vue
import Vue from 'vue'
/*  需要安装插件 npm i vuex指定版本号需要@版本号,
    Vuex的作用:用来管理状态，共享数据，在各个组件之间管理外部状态
    第一步：引入vuex，并通过use方法使用它
*/
import Vuex from 'vuex'
//通过use方法使用它
Vue.use(Vuex)

//第二步： 创建状态仓库
export default new Vuex.Store({
  // state一定不能乱改
    state:{
      num: 88
    },
    // mutation只能包含同步操作
    mutations:{
      //定义我们的状态改变函数
      increase:function(state) {
          state.num++;
      },
      decrease:function(state) {
          state.num -= 20;
      }

      //ES6语法
      // increase(state) {

      // }
    },

    // actions可以包含异步操作
    actions:{
      //注意：actions提交的是mutation,而不是直接变更状态
      //context为上下文对象
      //actions中只能对mutation进行操作
  
      decreaseAction(context) {
          // actions可以包含异步操作
          // setTimeout(function() {
            context.commit('decrease')
        // },1000)
      }
    },
    getters:{
        getNum(state) {
            return state.num > 0 ? state.num : 0
        }
    }
})  