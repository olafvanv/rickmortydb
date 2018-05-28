import Vue from 'vue'
import Router from 'vue-router'
import Episodes from '@/components/Episodes'
import Characters from '@/components/Characters'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Characters
    },
    {
      path: '/episodes',
      name: 'Episodes',
      component: Episodes
    },
    {
      path: '/characters',
      name: 'Characters',
      component: Characters
    }
  ]
})
