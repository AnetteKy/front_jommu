<template>
  <div class="motherFlex d-flex flex-column addExerciseView">

    <div class="m-5">
      <h1><em>Kõik algab sinust endast!</em></h1>
    </div>

    <div class="row-cols-md-3 col-6 d-flex m-4">
      <h3>Täida väljad:</h3>
    </div>

    <div class="row-cols-md-3 col-6 d-flex offset-1 justify-content-center">

      <table class="table">
        <thead>
        <tr>
          <th scope="col">Harjutus</th>
          <th scope="col">Kordus</th>
          <th scope="col">Seeria</th>
          <th scope="col">Raskus</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th scope="row">{{ exerciseTemplateName }}</th>
          <td>
            <input v-model="exerciseInfo.reps" type="text" class="form-control text-sm-center" id="autoSizingInput"
                   placeholder="Sisesta korduste arv">
          </td>
          <td>
            <input v-model="exerciseInfo.sets" type="text" class="form-control text-sm-center" id="autoSizingInput"
                   placeholder="Sisesta seeriate arv">
          </td>
          <td>
            <input v-model="exerciseInfo.weight" value="0" type="text" class="form-control text-sm-center" id="autoSizingInput"
                   placeholder="Sisesta raskus, kg">
          </td>
        </tr>

        </tbody>
      </table>
    </div>

    <div class="row col-1 justify-content-center d-flex offset-6">
      <button v-on:click="addExerciseAdditionalInfo(exerciseInfo.exerciseId)" type="button" class="btn btn-success">Valmis</button>
    </div>

  </div>
</template>

<script>
export default {
  name: "AthleteAddExerciseView",
  data: function () {
    return {
      exerciseTemplateName: this.$route.query.exerciseTemplateName,

      exerciseInfo: {
        exerciseId: 0,
        exerciseTemplateId: this.$route.query.exerciseTemplateId,
     //   workoutPlanId: ,
        reps: null,
        sets: null,
        weight: null,
        status: 'A',
      }
    }
  },
  methods: {

    addExerciseAdditionalInfo: function (exerciseId) {
      this.$http.post("/exercise/additional/info", this.exerciseInfo
      ).then(response => {
        this.navigateToExerciseView()
        // siin sees pean kutsuma tegelikult get meetodi ka, kuhu panen parameetriks kaasa exercise id!!!!!!!
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },

    navigateToExerciseView: function () {
      this.$router.push({name: 'athleteExerciseRoute'})
    }
  }
}
</script>

<style scoped>

</style>