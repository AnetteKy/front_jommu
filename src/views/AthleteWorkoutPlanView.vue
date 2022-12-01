<template>
  <div class="motherFlex d-flex flex-grow-1 flex-column">

    <AthleteNavBar/>



    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
      <button v-on:click="navigateToExerciseView" type="button" class="btn btn-success btn-lg m-5">+ Lisa treeningkava</button>
    </div>

    <h2 class="col col-4 m-3">Minu treeningkavad</h2>
    <h5 class="col col-4 m-1">(treeningkava nimi)</h5>

    <div class="d-grid gap-2 d-md-flex justify-content-md-start">
      <button v-on:click="navigateToExerciseView"
              type="button" class="col col-1 m-1 btn btn-success">Muuda</button>
      <button type="button" class="col col-1 m-1 btn btn-success">Kustuta</button>

      <div class="col col-4 m-3">
        <AthleteWorkoutPlanTable/>
      </div>
      <button type="button" class="col col-1 m-1 btn btn-outline-success">Soorita kava</button>
    </div>

    <div class="col-lg-2">
      <table class="table table-hover">
        <thead>
        <tr>
          <th scope="col">Minu treeningkavad</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Mingi trenn 1</td>
        </tr>
        <tr>
          <td>Mingi trenn 2</td>
        </tr>
        <tr>
          <td colspan="2">Mingi trenn 3</td>
        </tr>
        </tbody>
      </table>
    </div>


  </div>

</template>

<script>

import AthleteNavBar from "@/components/navbar/AthleteNavBar";
import Logout from "@/views/Logout";
import AthleteWorkoutPlanTable from "@/components/workoutplan_table/AthleteWorkoutPlanTable";

export default {
  name: "AthleteWorkoutPlanView",
  components: {Logout, AthleteWorkoutPlanTable, AthleteNavBar},

  data: function () {
    return{
      displayDeleteButton: false
    }
  },

  methods: {
    logout: function () {
      this.$router.push({name: 'roleRoute'})
    },
    navigateToExerciseView: function () {
      this.$router.push({name: 'athleteExerciseRoute'}),
          this.displayDeleteButton = true
    },

  }

}
</script>

