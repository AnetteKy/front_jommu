<template>
  <div class="motherFlex flex-column athleteHomeView">
    <AthleteNavBar/>

    <div class="opacityhomeview ms-5 me-5">

      <div class="m-4">
        <h1>Tere tulemast, {{ username }}</h1>
      </div>
      <div class="mb-4">
        <h4 class="quoteFont"><em>Päevatsitaat: "Sa oled ainult ühe trenni kaugusel suurepärasest tujust!"</em></h4>
      </div>


      <div class="row-cols-8 justify-content-md-center">

        <div class="d-grid gap-2 d-md-flex justify-content-md-center">
          <button v-on:click="navigateToWorkoutPlanView" class="button-25 btn-lg col-2 m-5" role="button">Vaata oma
            treeningkavasid
          </button>
        </div>

        <div class="d-grid gap-2 d-md-flex justify-content-md-center">
          <button v-on:click="navigateToExerciseView" class="button-25 btn-lg col-2 mb-5" role="button">Koosta uus
            treeningkava
          </button>
        </div>

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
      sessionStorage.setItem('workoutPlanId', '0')
      this.$router.push({name: 'athleteExerciseRoute'})
    },
    navigateToWorkoutPlanView: function () {
      this.$router.push({name: 'athleteWorkoutPlanRoute'})
    },
  }

}

</script>

