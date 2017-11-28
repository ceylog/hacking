import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/layout/Layout'
import Hello from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Layout,
      children:[
        {
          path: 'hello',
          alias: '/',
          name:'HelloWorld',
          component: Hello
        }
      ]
    }
  ]
})
