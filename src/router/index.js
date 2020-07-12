//入口页
const main = r=>require.ensure([],()=>r(require('@/view/main.vue')),'main')
//文章详情
const detail = r=>require.ensure([],()=>r(require('@/view/detail.vue')),'detail')
//联系我们
const contact = r=>require.ensure([],()=>r(require('@/view/contact.vue')),'contact')
//申请参观
const apply = r=>require.ensure([],()=>r(require('@/view/apply.vue')),'apply')
//视频列表
const videos = r=>require.ensure([],()=>r(require('@/view/videos.vue')),'videos')
//园区介绍
const introduce = r=>require.ensure([],()=>r(require('@/view/introduce.vue')),'introduce')
//招商政策
const policy = r=>require.ensure([],()=>r(require('@/view/policy.vue')),'policy')

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
      path:'/detail',
      component:detail,
      name:'详情',
      children:[
    //   {path:'/main/integral', component:integral},
      ]
    },
    {
      path:'/contact',
      component:contact,
      name:'联系我们',
      children:[
    //   {path:'/main/integral', component:integral},
      ]
    },
    {
      path:'/apply',
      component:apply,
      name:'申请参观',
      children:[
    //   {path:'/main/integral', component:integral},
      ]
    },
    {
      path:'/videos',
      component:videos,
      name:'园区视频',
      children:[
    //   {path:'/main/integral', component:integral},
      ]
    },
    {
      path:'/introduce',
      component:introduce,
      name:'园区介绍',
      children:[
    //   {path:'/main/integral', component:integral},
      ]
    },
    {
      path:'/policy',
      component:policy,
      name:'政策介绍',
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
