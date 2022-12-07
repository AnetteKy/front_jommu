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
            <input v-model="exerciseRequest.reps" type="number" class="form-control text-sm-center" id="autoSizingInput"
                   placeholder="Sisesta korduste arv">
          </td>
          <td>
            <input v-model="exerciseRequest.sets" type="number" class="form-control text-sm-center" id="autoSizingInput"
                   placeholder="Sisesta seeriate arv">
          </td>
          <td>
            <input v-model="exerciseRequest.weight" value="0" type="number" class="form-control text-sm-center"
                   id="autoSizingInput"
                   placeholder="Sisesta raskus, kg">
          </td>
        </tr>

        </tbody>
      </table>
    </div>

    <div class="row col-1 justify-content-center d-flex offset-6">
      <button v-on:click="addExerciseAdditionalInfo" type="button" class="btn btn-success">
        Valmis
      </button>
    </div>

  </div>
</template>

<script>
export default {
  name: "AthleteAddExerciseView",
  data: function () {
    return {
      exerciseTemplateName: this.$route.query.exerciseTemplateName,

      exerciseRequest: {
        exerciseTemplateId: this.$route.query.exerciseTemplateId,
        workoutPlanId: this.$route.query.workoutPlanId,
        reps: null,
        sets: null,
        weight: null,
      },
      // exerciseResponse: {
      //   exerciseId: 0,
      // },
    }
  },
  methods: {

    addExerciseAdditionalInfo: function () {
      this.$http.post("/exercise/additional/info", this.exerciseRequest
      ).then(response => {
        this.navigateToExerciseView()
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },

    navigateToExerciseView: function () {
      // this.exerciseRequest.exerciseTemplateId = sessionStorage.setItem('exerciseTemplateId', this.exerciseRequest.exerciseTemplateId)
      this.$router.push({name: 'athleteExerciseRoute'})
    }
  }
}
</script>

<style scoped>

</style>