<template>

  <div class="motherFlex flex-column ">

    <AthleteNavBar/>

    <div class="row justify-content-around m-1">
      <div class="col-md-2">
        <h5>Minu treeningkavad</h5>
        <!--          <table class="table table-hover">-->
        <!--            <thead>-->
        <!--            <tr>-->
        <!--              <th scope="col">Minu treeningkavad</th>-->
        <!--            </tr>-->
        <!--            </thead>-->
        <!--            <tbody>-->
        <!--            <tr>-->
        <!--              <td>Mingi trenn 1</td>-->
        <!--            </tr>-->
        <!--            <tr>-->
        <!--              <td>Mingi trenn 2</td>-->
        <!--            </tr>-->
        <!--            <tr>-->
        <!--              <td colspan="2">Mingi trenn 3</td>-->
        <!--            </tr>-->
        <!--            </tbody>-->
        <!--          </table>-->
      </div>
      <div class="d-md-flex justify-content-md-end">
        <button v-on:click="navigateToExerciseView" type="button" class="btn btn-success btn-lg m-5">+ Lisa
          treeningkava
        </button>
      </div>
    </div>

    <div class="row justify-content-center m-3">
      <div class="col-6 justify-content-center">
        <h2 class="col col-4 m-3">Minu treeningkavad</h2>
        <h5 class="col col-4 m-1">(treeningkava nimi)</h5>

        <!--          <button v-on:click="navigateToExerciseView"-->
        <!--                  type="button" class="col col-1 m-1 btn btn-success">Muuda</button>-->
        <!--          <button type="button" class="col col-1 m-1 btn btn-success">Kustuta</button>-->

        <AthleteWorkoutPlanTable/>

        <div class="row col-2 offset-10">
          <button type="button" class="btn btn-success ">Soorita kava</button>
        </div>
        <div class="row col-2 offset-10">
          <button type="button" class="btn btn-success ">Muuda kava</button>
        </div>
        <div class="row col-2 offset-10">
          <button type="button" class="btn btn-success ">Kustuta kava</button>
        </div>

      </div>


    </div>
  </div>

</template>

<script>

import AthleteNavBar from "@/components/navbar/AthleteNavBar";
import AthleteWorkoutPlanTable from "@/components/workoutplan_table/AthleteWorkoutPlanTable";

export default {
  name: "AthleteWorkoutPlanView",
  components: {AthleteWorkoutPlanTable, AthleteNavBar},

  data: function () {
    return {
      displayDeleteButton: false
    }
  },

  methods: {
    navigateToExerciseView: function () {
      this.$router.push({name: 'athleteExerciseRoute'}),
          this.displayDeleteButton = true
    },

  }

}
</script>

