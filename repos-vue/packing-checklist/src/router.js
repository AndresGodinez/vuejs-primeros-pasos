import Vue from 'vue'
import Router from 'vue-router'
import ListPage from './views/ListPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'list-page',
      component: ListPage
    }
  ]
})
