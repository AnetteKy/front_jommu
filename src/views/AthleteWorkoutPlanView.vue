<template>
  <div class="d-flex flex-grow-1 flex-column">

    <AthleteNavBar/>

    <Logout :logout="logout"/>

    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
      <button type="button" class="btn btn-success btn-lg m-5">+ Lisa treeningkava</button>
    </div>

    <h2 class="col col-4 m-3">Minu treeningkavad</h2>
    <h5 class="col col-4 m-1">(treeningkava nimi)</h5>

    <div class="d-grid gap-2 d-md-flex justify-content-md-start">
      <button type="button" class="col col-4 m-1 btn btn-outline-success">Soorita kava</button>
      <div class="col col-4 m-3">
        <AthleteWorkoutPlanTable/>
      </div>
    </div>

  </div>

</template>

<script>

import AthleteNavBar from "@/components/navbar/AthleteNavBar";
import Logout from "@/views/Logout";
import AthleteWorkoutPlanTable from "@/components/AthleteWorkoutPlanTable/AthleteWorkoutPlanTable";

export default {
  name: "AthleteWorkoutPlanView",
  components: {Logout, AthleteWorkoutPlanTable, AthleteNavBar},

  methods: {
    logout: function () {
      this.$router.push({name: 'roleRoute'})
    },
    addExercise: function () {
      this.$router.push({name: 'athleteExerciseRoute'})
    }
  }

}
</script>

