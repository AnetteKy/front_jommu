<template>
  <div class="flex2 workoutPlanView">
    <AthleteNavBar/>

    <div class="opacityworkout d-flex m-5">
      <div class="col-2">

        <div class="justify-content-start">
          <div class="col">
            <table class="table table-hover">
              <thead>
              <tr>
                <th scope="col">Minu treeningkavad</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>Peagümnastika</td>
              </tr>
              <tr>
                <td>Keha äratus</td>
              </tr>
              <tr>
                <td colspan="2">...</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>

      <div class="col">
        <div class="row justify-content-around">
          <div class="col-8">

            <h2 class="col m-5">Minu treeningkavad</h2>

            <div>
              <h5 class="col mb-3">Peagümnastika</h5>

              <AthleteWorkoutPlanTable/>

              <div>
                <button v-on:click="navigateToExerciseView" type="button" class="m-2 btn btn-outline-dark ">Muuda kava
                </button>
                <button type="button" class="btn btn-outline-dark ">Kustuta kava</button>
                <button type="button" class="m-5 col-3 btn btn-dark">Soorita kava</button>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div class="col-3 justify-content-end">
        <button v-on:click="navigateToExerciseView" type="button" class="btn btn-dark btn-lg">+ Lisa
          treeningkava
        </button>
      </div>
    </div>

  </div>

</template>

<script>

import AthleteNavBar from "@/components/navbar/AthleteNavBar";
import AthleteSavedWorkoutPlanTable from "@/components/workoutplan_table_saved/AthleteSavedWorkoutPlanTable";

export default {
  name: "AthleteWorkoutPlanView",
  components: {AthleteSavedWorkoutPlanTable, AthleteNavBar},

  data: function () {
    return {

      workoutPlanInfos: [
        {
          exerciseTableInfos: {
            exerciseId: 0,
            workoutPlanId: 0,
            exerciseTemplateName: '',
            reps: 0,
            sets: 0,
            weight: 0,
            status: '',
          },
        }
      ],
    }
  },

  methods: {

    getAllWorkoutPlanInfo: function () {
      this.$http.get("/workoutPlan/table/info")
          .then(response => {
            this.workoutPlanInfos = response.data
            console.log(response.data)
          })
          .catch(error => {
            console.log(error)
          })
    },

    navigateToExerciseView: function () {
      this.$router.push({name: 'athleteExerciseRoute'})
    }
  },

  beforeMount() {
    this.getAllWorkoutPlanInfo()
  }

}
</script>

