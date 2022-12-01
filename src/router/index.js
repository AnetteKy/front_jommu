import Vue from 'vue'
import VueRouter from 'vue-router'
import RoleView from "@/views/RoleView";
import AthleteHomeView from "@/views/AthleteHomeView";
import TrainerHomeView from "@/views/TrainerHomeView";
import RegisterView from "@/views/RegisterView";
import AthleteExerciseView from "@/views/AthleteExerciseView";
import AthleteWorkoutPlanView from "@/views/AthleteWorkoutPlanView";
import AthleteWorkoutHistoryView from "@/views/AthleteWorkoutHistoryView";
import AdminView from "@/views/AdminView";

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
    path: '/athlete/addexercise',
    name: 'athleteAddExerciseRoute',
    component: AthleteAddExerciseView
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
  {
    path: '/admin',
    name: 'adminRoute',
    component: AdminView
  },
]

const router = new VueRouter({
  routes
})

export default router
