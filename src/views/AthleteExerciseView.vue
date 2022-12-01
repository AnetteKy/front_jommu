<template>
  <div class="d-flex flex-grow-1 flex-column">
    <AthleteNavBar/>
    <div class="row">
      <div class="col-md-2 offset-md-3">
        <h6>Vali treeningkava</h6>
        <select class="form-select " aria-label="Default select example">
          <option selected>Treeningkava</option>
          <option value="1">One</option>
        </select>
      </div>
      <div class="col-md-4 offset-md-2">
        <h6>Soovid koostada uut treeningkava?</h6>
        <div class="input-group mb-2">
          <span class="input-group-text" id="inputGroup-sizing-default">Treeningkava nimi</span>
          <input type="text" class="form-control" aria-label="Sizing example input"
                 aria-describedby="inputGroup-sizing-default">
        </div>
        <button type="button" class="btn btn-outline-success btn-lg">
          LISA
        </button>
      </div>
    </div>
    <div class="container">
      <div class="row offset-md-1">
        <div class="col-9">
          <h4>Hetkel koostamisel</h4>
          <div class="row offseyt-md-1">
            <div class="col-sm-7">
              <input class="form-control form-control-md col-md" type="text"
                     placeholder="Uue treeningkava nimi (lisatakse nupule vajutamisega)"
                     aria-label=".form-control-lg example">
            </div>
            <div class="col-lg-5">
              <button type="button" class="btn btn-success ">LISA</button>
            </div>
          </div>


          <AthleteWorkoutPlanTable/>
        </div>

      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-3">
          FILTREERI HARJUTUSI
          <button type="button" class="btn btn-success d-grid gap-2 col-6 mb-2 mx-auto">KÕIK</button>
          <button type="button" class="btn btn-success d-grid gap-2 col-6 mb-2 mx-auto">Kõht</button>
          <button type="button" class="btn btn-success d-grid gap-2 col-6 mb-2 mx-auto">Jalg</button>
          <button type="button" class="btn btn-success d-grid gap-2 col-6 mb-2 mx-auto">Käsi</button>
        </div>
        <div class="col-md-3">
          <h4>Harjutused</h4>
          <div class="row-cols-md-3">
            <ExercisesTabe/>
          </div>
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
  components: {AthleteWorkoutPlanTable, ExerciseTable, AthleteNavBar}
}
</script>
