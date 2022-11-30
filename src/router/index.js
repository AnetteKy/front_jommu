import Vue from 'vue'
import VueRouter from 'vue-router'
import RoleView from "@/views/RoleView";
import AthleteHomeView from "@/views/AthleteHomeView";
import TrainerHomeView from "@/views/TrainerHomeView";
import RegisterView from "@/views/RegisterView";
import AthleteWorkoutPlanView from "@/views/AthleteWorkoutPlanView";

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
    path: '/athlete/workoutplan',
    name: 'athleteWorkoutPlanRoute',
    component: AthleteWorkoutPlanView
  },
  {
    path: '/trainer/home',
    name: 'trainerHomeRoute',
    component: TrainerHomeView
  },
  {
    path: '/register',
    name: 'registerRoute',
    component: RegisterView
  },
]

const router = new VueRouter({
  routes
})

export default router
