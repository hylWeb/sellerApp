import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import Content from '@/page/content'
import List from '@/page/list'
import Add from '@/page/add'
import Register from '@/page/register'
import UpdatePass from '@/page/updatePass'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    }, {
      path: '/content/:id',
      component: Content
    }, {
      path: '/list',
      component: List
    }, {
      path: '/add',
      component: Add
    }
    , {
      path: '/register',
      component: Register
    }, {
      path: '/update-pass',
      component: UpdatePass
    }

  ]
})

// 判断是否需要登录权限 以及是否登录
/*router.beforeEach((to, from, next) => {
 if (to.matched.some(res => res.meta.requireAuth)) {// 判断是否需要登录权限
 if (localStorage.getItem('username')) {// 判断是否登录
  next()
 } else {// 没登录则跳转到登录界面
  next({
  path: '/',
  query: {redirect: to.fullPath}
  })
 }
 } else {
 next()
 }
})*/
