import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import utils from '@/utils/base.js'

Vue.use(Router)

const _improt = file => () => import(`@/pages/${file}.vue`)




export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'home',
      component: _improt("home"),
      meta: {
        title: "在线做实现 高效学编程"
      }
    }

  ]
})
