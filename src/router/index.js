import Vue from 'vue'
import Router from 'vue-router'
import Main from 'views/main'
import List from 'views/list/list'
import ListAdd from 'views/list/listAdd'
import Home from 'views/home'
import Login from 'views/login'
import Register from 'views/register'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },{
      path: '/main',
      name: 'Main',
      component: Main,
      children:[
        {
          path: '/home',
          name: 'Home',
          component: Home
        },{
          path: '/list',
          name: 'List',
          component: List
        },{
          path: '/listAdd',
          name: 'ListAdd',
          component: ListAdd
        }
      ]
    },{
      path: '/login',
      name: 'Login',
      component: Login
    },{
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})

/**
 * 全局路由守卫
 */
// router.beforeEach((to, from, next) => {
//   let cookieKey = Vue.prototype.$cookie_key
//   if (to.path === '/login' || to.path === '/register') {
//     next()
//     return
//   }
//   // 未获取到cookie跳转到登录页
//   if (!Vue.prototype.$getcookie(cookieKey)) {
//     next({path: '/login'})
//   } else {
//     // 如果没有用户信息 获取用户信息
//     if (!store.getters.userinfo || !store.getters.userinfo.account) {
//       store.dispatch('getUserInfo', {})
//       next()
//     } else {
//       next()
//     }
//   }
//   // console.log('777', store.getters)
// })


export default router
