import Vue from 'vue'
import VueRouter from 'vue-router'

/* 导入路由组件 */
import Home from '@/views/Home'
import Login from '@/views/Login'
import Search from '@/views/Search'
import Register from '@/views/Register'

/* 关闭路由导航重复点击提醒 */
const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  /* 一级路由组件 */
  {
    path:'/home',
    component:Home,
    meta:{
      showFooter:true
    },
    name:'home'
  },
  {
    path:'/login',
    component:Login,
    meta:{
      showFooter:false
    }
  },
  {
    path:'/search/:keyWord?',
    component:Search,
    name:'search',
    meta:{
      showFooter:true
    },
    props:($route)=>{
     return{
      keyWord:$route.params.keyWord,
      k:$route.query.k
     }
    }
  },
  {
    path:'/register',
    component:Register,
    meta:{
      showFooter:false
    }
  },
  /* 设置重定向 */
  {
    path:'*',
    redirect:'/home'
  }
]

const router = new VueRouter({
  routes
})

export default router
