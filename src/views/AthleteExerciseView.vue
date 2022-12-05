<template>
  <div class="motherFlex flex-column exerciseView">
    <AthleteNavBar/>
    <div class="row justify-content-around m-1">
      <div class="col-md-2">
        <h6>Vali treeningkava</h6>
        <select class="form-select " aria-label="Default select example">
          <option selected>Treeningkava</option>
          <option value="1">One</option>
        </select>
      </div>
      <div class="col-md-3">
        <div class="row">
          <h6>Soovid koostada uut treeningkava?</h6>
        </div>
        <div class="row input-group mb-2">
          <input type="text" class="form-control" id="autoSizingInput" placeholder="Sisesta treeningkava nimi">
        </div>
        <div class="row col-lg-6">
        <button v-on:click="" type="button" class="btn btn-success">
          +LISA treeningkava
        </button>
        </div>
      </div>
    </div>

    <div class="row justify-content-center m-3">
      <div class="col-6 justify-content-center">
        <h4>Hetkel koostamisel:</h4>

        <AthleteWorkoutPlanTable/>
        <div class="row col-2 offset-10">
          <button type="button" class="btn btn-success ">VALMIS</button>
        </div>
      </div>
    </div>


    <div class="row m-4">
      <div class="col-3">
        FILTREERI HARJUTUSI
        <button type="button" class="btn btn-success d-grid gap-2 col-6 mb-2 mx-auto">KÕIK</button>
        <button type="button" class="btn btn-success d-grid gap-2 col-6 mb-2 mx-auto">Kõht</button>
        <button type="button" class="btn btn-success d-grid gap-2 col-6 mb-2 mx-auto">Jalg</button>
        <button type="button" class="btn btn-success d-grid gap-2 col-6 mb-2 mx-auto">Käsi</button>
      </div>
      <div class="col-md-5">
        <h4>Harjutused</h4>

        <ExerciseTable @clickNavigateToAddExerciseEvent="navigateToAddExView"/>

      </div>
    </div>

  </div>
</template>

<script>
import AthleteNavBar from "@/components/navbar/AthleteNavBar";
import ExerciseTable from "@/components/exercise_table/ExerciseTable";
import AthleteWorkoutPlanTable from "@/components/workoutplan_table/AthleteWorkoutPlanTable";

export default {
  name: "AthleteExerciseView",
  components: {AthleteWorkoutPlanTable, ExerciseTable, AthleteNavBar},
  data: function () {
    return {
      workoutPlanRequest: {
        userId: sessionStorage.getItem('userId'),
        workoutPlanName: ''
      },

      workoutPlanResponse: {
        workoutPlanId: 0,
        userId: 0,
      }
    }
  },

  methods: {

    addWorkoutPlanInfo: function () {
      this.$http.post("/workoutplan/info", this.workoutPlanRequest
      ).then(response => {
        //this.getallworkoutplans
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },

    navigateToAddExView: function (exTemplMuscleInfo) {
      this.$router.push({
        name: 'athleteAddExerciseRoute', query: {
          exerciseTemplateId: exTemplMuscleInfo.exerciseTemplateId,
          exerciseTemplateName: exTemplMuscleInfo.exerciseTemplateName
        }
      })
    }

  }
}
</script>
