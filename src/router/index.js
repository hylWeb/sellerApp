import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import Content from '@/page/content'
import List from '@/page/list'
import Add from '@/page/add'

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

  ]
})
