<template>
  <div class="motherFlex d-flex flex-column exerciseView">
    <AthleteNavBar/>
    <div class="row justify-content-around">
      <div class="col-md-2">
        <h6>Vali treeningkava</h6>
        <select class="form-select " aria-label="Default select example">
          <option selected>Treeningkava</option>
          <option value="1">One</option>
        </select>
      </div>
      <div class="col-md-3 offset-md-2">
        <div class="row">
          <h6>Soovid koostada uut treeningkava?</h6>
        </div>
        <div class="row input-group mb-2">
          <input type="text" class="form-control" id="autoSizingInput" placeholder="Sisesta treeningkava nimi">
        </div>
        <div class="row col-lg-6">
        <button type="button" class="btn btn-success">
          +LISA treeningkava
        </button>
        </div>
      </div>
    </div>

    <div class="row offset-2">
      <div class="col-6">
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
  methods: {

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
