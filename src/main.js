// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 引入重置样式
import 'assets/css/reset.css'

// 引入Vuex
import store from './store/index'

// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


// 方法库
import { post, get, err } from '@/lib/axios'
import { setcookie, getcookie, delcookie } from '@/lib/cookie'
import tools from '@/lib/tools'

// 方法库设置
Vue.prototype.$post = post
Vue.prototype.$get = get
Vue.prototype.$err = err
Vue.prototype.$setcookie = setcookie
Vue.prototype.$getcookie = getcookie
Vue.prototype.$delcookie = delcookie
Vue.prototype.$tools = tools

// 组件库
import ysMyPage from 'components/tools/myPage'

// 组件库设置
Vue.component('YsMyPage', ysMyPage)

// 全局组件

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
