<template>
  <div class="motherFlex flex-column exerciseView">
    <AthleteNavBar/>

    <div class="mb-5 ms-2 me-2">
      <div class="row justify-content-around mb-4 mt-5">
        <div class="col-md-2">
          <h6><b>Vali treeningkava</b></h6>
          <select v-on:change="changeWorkoutPlan" v-model="selectedWorkoutPlanId" class="form-select "
                  aria-label="Default select example">
            <option selected disabled value="0">Treeningkava nimi</option>
            <option v-for="workoutPlan in workoutPlans" :key="workoutPlan.workoutPlanId"
                    :value="workoutPlan.workoutPlanId">
              {{ workoutPlan.workoutPlanName }}
            </option>
          </select>
        </div>
        <div class="col-md-3">
          <div class="row">
            <h6><b>Soovid koostada uut treeningkava?</b></h6>
          </div>
          <div class="row input-group mb-2">
            <input v-model="workoutPlanRequest.workoutPlanName" type="text" class="form-control" id="autoSizingInput"
                   placeholder="Sisesta treeningkava nimi">
          </div>
          <div class="row col-lg-6">
            <button v-on:click="addWorkoutPlanInfo" type="button" class="button-25">
              +LISA treeningkava
            </button>
          </div>
        </div>
      </div>

      <div v-if="selectedWorkoutPlanId !== '0'" class="row justify-content-center mt-5 mb-5">
        <div class=" col-6 justify-content-center">
          <h3 class="mb-5"><u>Hetkel koostamisel:</u></h3>

          <AthleteWorkoutPlanTable :exercise-table-infos="exerciseTableInfos"
                                   @deleteExerciseFromTableEvent="disableExerciseFromTable"
          />

          <div class="row col-2 offset-10">
            <button v-on:click="navigateToWorkoutPlanView" type="button" class="button-25">VALMIS</button>
          </div>
        </div>
      </div>


      <div v-if="selectedWorkoutPlanId !== '0'" class="row m-4">
        <div class="col-3">
          <h5 class="mb-3"><b>Filtreeri harjutusi</b></h5>
          <button v-on:click="getAllExTempMuscleInfo" type="button"
                  class="button-27 d-grid gap-2 col-6 mb-2 mx-auto">K??IK
          </button>

          <button v-for="muscleGroup in muscleGroups" :key="muscleGroup.muscleId" :value="muscleGroup.muscleId"
                  v-model="selectedMuscleGroupId" v-on:click="getExTempByMuscleGroupId(muscleGroup.muscleId)"
                  type="button" class="button-25 d-grid gap-2 col-6 mb-2 mx-auto">
            {{ muscleGroup.muscleName }}
          </button>
        </div>

        <div class="col-md-5">
          <h3 class="mb-3"><u>Harjutused</u></h3>

          <ExerciseTable @clickNavigateToExerciseDescriptionEvent="clickNavigateToExerciseDescriptionView"
                         :ex-temp-muscle-group-infos="exTempMuscleGroupInfos"
                         @clickNavigateToAddExerciseEvent="navigateToAddExView"/>

        </div>
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
      selectedWorkoutPlanId: sessionStorage.getItem('workoutPlanId'),
      workoutPlanRequest: {
        userId: sessionStorage.getItem('userId'),
        workoutPlanName: ''
      },

      workoutPlanResponse: {
        workoutPlanId: 0,
        workoutPlanName: '',
      },

      workoutPlans: {
        workoutPlanId: 0,
        workoutPlanName: ''
      },

      exerciseTableInfos: {
        exerciseId: 0,
        workoutPlanId: 0,
        exerciseTemplateName: '',
        reps: 0,
        sets: 0,
        weight: 0,
        status: '',
      },

      exTempMuscleGroupInfos: {
        exTempMuscleGroupId: 0,
        exerciseTemplateId: 0,
        exerciseTemplateName: '',
        exerciseTemplateDescription: '',
        exerciseTemplateImgData: '',
        muscleGroupId: 0,
        muscleGroupName: ''
      },

      disableExerciseInfo: {
        exerciseId: 0
      },

      muscleGroups: [
        {
          muscleId: 0,
          muscleName: ''
        }
      ],

      selectedMuscleGroupId: 0,

    }
  },

  methods: {
    clickNavigateToExerciseDescriptionView: function (exerciseTemplateId) {
      this.$router.push({
        name: 'exerciseDescriptionRoute', query: {
          exerciseTemplateId: exerciseTemplateId
        }
      })
    },


    addWorkoutPlanInfo: function () {
      this.$http.post("/workoutplan/info", this.workoutPlanRequest
      ).then(response => {
        this.workoutPlanResponse = response.data
        this.selectedWorkoutPlanId = this.workoutPlanResponse.workoutPlanId
        sessionStorage.setItem('workoutPlanId', this.workoutPlanResponse.workoutPlanId)
        this.getAllWorkoutPlanInfo()
        this.getAllExerciseTableInfo()
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },

    getAllWorkoutPlanInfo: function () {
      this.$http.get("/allworkoutplan/info", {
            params: {
              userId: sessionStorage.getItem('userId'),
            }
          }
      ).then(response => {
        this.workoutPlans = response.data
      }).catch(error => {
        console.log(error)
      })
    },

    navigateToAddExView: function (exTemplMuscleInfo) {
      this.$router.push({
        name: 'athleteAddExerciseRoute', query: {
          exerciseTemplateId: exTemplMuscleInfo.exerciseTemplateId,
          exerciseTemplateName: exTemplMuscleInfo.exerciseTemplateName,
          workoutPlanId: this.selectedWorkoutPlanId
        }
      })
    },

    getAllExerciseTableInfo: function () {
      this.$http.get("/exercise/table/info", {
            params: {
              workoutPlanId: this.selectedWorkoutPlanId
            }
          }
      ).then(response => {
        this.exerciseTableInfos = response.data
        // sessionStorage.setItem('exerciseId', this.exerciseTableInfos.exerciseId)
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },

    changeWorkoutPlan: function () {
      sessionStorage.setItem('workoutPlanId', this.selectedWorkoutPlanId)
      this.getAllExerciseTableInfo()
    },

    disableExerciseFromTable: function (exerciseTableInfo) {
      this.disableExerciseInfo.exerciseId = exerciseTableInfo.exerciseId
      this.$http.patch("/disable/exercise/info", this.disableExerciseInfo
      ).then(response => {
        this.getAllExerciseTableInfo()
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },

    getAllExTempMuscleInfo: function () {
      this.$http.get("/extempmusclegroup")
          .then(response => {
            this.exTempMuscleGroupInfos = response.data
            console.log(response.data)
          })
          .catch(error => {
            console.log(error)
          })
    },

    getExTempByMuscleGroupId: function (muscleId) {
      this.$http.get("/extemp/bymusclegroupid", {
            params: {
              muscleGroupId: muscleId
            }
          }
      ).then(response => {
        this.exTempMuscleGroupInfos = response.data
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },


    getAllMuscleGroups: function () {
      this.$http.get("/all/musclegroups")
          .then(response => {
            this.muscleGroups = response.data

            console.log(response.data)
          })
          .catch(error => {
            console.log(error)
          })
    },

    navigateToWorkoutPlanView: function () {
      this.$router.push({name: 'athleteWorkoutPlanRoute'})
    }

  },
  beforeMount() {
    if (this.selectedWorkoutPlanId !== '0') {
      this.getAllExerciseTableInfo()
    }

    this.getAllWorkoutPlanInfo();
    this.getAllExTempMuscleInfo();
    this.getAllMuscleGroups()
  }
}
</script>
