import Vue from 'vue'
import VueRouter from 'vue-router'
import RoleView from "@/views/RoleView";
import AthleteHomeView from "@/views/AthleteHomeView";
import TrainerHomeView from "@/views/TrainerHomeView";
import RegisterView from "@/views/RegisterView";
import AthleteExerciseView from "@/views/AthleteExerciseView";
import AthleteWorkoutPlanView from "@/views/AthleteWorkoutPlanView";
import AthleteWorkoutHistoryView from "@/views/AthleteWorkoutHistoryView";

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
  },  {
    path: '/athlete/exercise',
    name: 'athleteExerciseRoute',
    component: AthleteExerciseView
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
  {
    path: '/athlete/history',
    name: 'athleteWorkoutHistoryRoute',
    component: AthleteWorkoutHistoryView
  },
]

const router = new VueRouter({
  routes
})

export default router
