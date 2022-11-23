import Vue from 'vue'
import VueRouter from 'vue-router'
import RoleView from "@/views/RoleView";
import AthleteHomeView from "@/views/AthleteHomeView";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'roleRoute',
    component: RoleView
  },
  {
    path: '/athlete/home',
    name: 'athleteHomeRoute',
    component: AthleteHomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
