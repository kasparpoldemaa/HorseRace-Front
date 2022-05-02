import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BetView from "@/views/BetView";
import RaceView from "@/views/RaceView";
import ResultsView from "@/views/ResultsView";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/bet',
    name: 'bet',
    component: BetView
  },
  {
    path: '/race',
    name: 'race',
    component: RaceView
  },
  {
    path: '/results',
    name: 'results',
    component: ResultsView
  },

  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: function () {
  //     return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  //   }
  // }
]

const router = new VueRouter({
  routes
})

export default router
