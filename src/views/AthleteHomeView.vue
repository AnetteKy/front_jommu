<template>
  <div class="motherFlex d-flex flex-grow-1 flex-column">
    <AthleteNavBar/>

    <div>
      <h1>Tere tulemast, {{ username }}</h1>
      <br>
      <h4>Päevatsitaat: "Fitness - if it came in a bottle, everybody would have a great body."</h4>
    </div>

    <div class="row-cols-8 justify-content-md-center">
      <div class="d-grid gap-2 d-md-flex justify-content-md-center">
        <button v-on:click="navigateToWorkoutPlanView" type="button" class="btn btn-outline-secondary btn-lg m-5">Vaata
          oma treeningkavasid
        </button>
      </div>
      <div class="d-grid gap-2 d-md-flex justify-content-md-center">
        <button v-on:click="navigateToExerciseView" type="button" class="btn btn-outline-secondary btn-lg m-5">Koosta
          treeningkava
        </button>
      </div>
    </div>

  </div>
</template>

<script>

import AthleteNavBar from "@/components/navbar/AthleteNavBar";

export default {
  name: "AthleteHomeView",
  components: {AthleteNavBar},
  data: function () {
    return {
      username: sessionStorage.getItem('username'),

    }
  },

  methods: {


    navigateToExerciseView: function () {
      this.$router.push({name: 'athleteExerciseRoute'})
    },
    navigateToWorkoutPlanView: function () {
      this.$router.push({name: 'athleteWorkoutPlanRoute'})
    },
  }

}

</script>

