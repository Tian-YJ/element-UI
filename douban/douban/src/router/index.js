import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import bookInfo from '@/components/bookInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/bookinfo/:bookid',
      name: 'bookinfo',
      component: bookInfo
    }    
  ]
})
