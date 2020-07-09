//入口页
const main = r=>require.ensure([],()=>r(require('@/view/main.vue')),'main')
//404
const notfount = r=>require.ensure([],()=>r(require('@/view/404.vue')),'notfount')
//路由
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/main'
    },
    {
      path:'/main',
      component:main,
      name:'入口页',
      children:[
    //   {path:'/main/integral', component:integral},
      ]
    },
    {
      path:'*',
      component:notfount,
      name:'notfount',
    },
  ]
})
