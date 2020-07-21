import Vue from 'vue'
import Router from 'vue-router'
import Search from '../Search.vue'
import Results from '../Results.vue'
import VueToasted from 'vue-toasted'

Vue.use(Router)

//Vue Load Up the Toaster
Vue.use(VueToasted, {
  iconPack: 'fontawesome'
})

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Search',
      component: Search
    },{
      path: '/api/:platform/:playerid',
      name: 'Results',
      component: Results
    }
  ]
})
