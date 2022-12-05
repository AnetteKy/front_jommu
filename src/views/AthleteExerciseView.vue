<template>
  <div class="motherFlex flex-column exerciseView">
    <AthleteNavBar/>
    <div class="row justify-content-around m-1">
      <div class="col-md-2">
        <h6>Vali treeningkava</h6>
        <select v-model="workoutPlanResponse.workoutPlanId" class="form-select " aria-label="Default select example">
          <option selected disabled>Treeningkava nimi</option>
          <option v-for="workoutPlan in workoutPlans" :key="workoutPlan.workoutPlanId"
                  :value="workoutPlan.workoutPlanId">
            {{ workoutPlan.workoutPlanName }}
          </option>
        </select>
      </div>
      <div class="col-md-3">
        <div class="row">
          <h6>Soovid koostada uut treeningkava?</h6>
        </div>
        <div class="row input-group mb-2">
          <input v-model="workoutPlanRequest.workoutPlanName" type="text" class="form-control" id="autoSizingInput"
                 placeholder="Sisesta treeningkava nimi">
        </div>
        <div class="row col-lg-6">
          <button v-on:click="addWorkoutPlanInfo" type="button" class="btn btn-success">
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
        workoutPlanId: sessionStorage.getItem('workoutPlanId'),
        workoutPlanName: '',
      },

      workoutPlans: {
        workoutPlanId: 0,
        workoutPlanName: ''
      }
    }
  },

  methods: {

    addWorkoutPlanInfo: function () {
      this.$http.post("/workoutplan/info", this.workoutPlanRequest
      ).then(response => {
        this.workoutPlanResponse = response.data
        sessionStorage.setItem('workoutPlanId', this.workoutPlanResponse.workoutPlanId)
        this.getAllWorkoutPlanInfo()
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },

    getAllWorkoutPlanInfo: function () {
      this.$http.get("/allworkoutplan/info")
          .then(response => {
            this.workoutPlans = response.data
          })
          .catch(error => {
            console.log(error)
          })
    },

    navigateToAddExView: function (exTemplMuscleInfo) {
      this.$router.push({
        name: 'athleteAddExerciseRoute', query: {
          exerciseTemplateId: exTemplMuscleInfo.exerciseTemplateId,
          exerciseTemplateName: exTemplMuscleInfo.exerciseTemplateName,
          workoutPlanId: this.workoutPlanResponse.workoutPlanId
        }
      })
    },

    // getAllExerciseTableInfo: function () {
    //   this.$http.get("/some/path")
    //       .then(response => {
    //         console.log(response.data)
    //       })
    //       .catch(error => {
    //         console.log(error)
    //       })
    // },

  },
  mounted() {
    this.getAllWorkoutPlanInfo()
  }
}
</script>
