<template>
  <tbody>
  <tr v-for="exTemplMuscleInfo in exTempMuscleGroupInfos">
    <th scope="row">{{ exTemplMuscleInfo.exerciseTemplateName }}</th>
    <td>{{ exTemplMuscleInfo.muscleGroupName }}</td>
    <td>
      <button v-on:click="clickNavigateToAddExerciseEvent(exTemplMuscleInfo)" type="button"
              class="btn btn-success btn-sm">+Lisa
      </button>
    </td>
    <td>
      <button v-on:click="clickNavigateToExerciseDescriptionEvent(exTemplMuscleInfo)" type="button" class="btn btn-secondary btn-sm">Vaata</button>
    </td>
  </tr>
  </tbody>
</template>
<script>
export default {
  name: 'ExerciseTableBody',

  data: function () {
    return {
      exTempMuscleGroupInfos: {
        exTempMuscleGroupId: 0,
        exerciseTemplateId: 0,
        exerciseTemplateName: '',
        exerciseTemplateDescription: '',
        exerciseTemplateImgData: '',
        muscleGroupId: 0,
        muscleGroupName: ''
      }
    }
  },

  methods: {

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

    clickNavigateToAddExerciseEvent: function (exTemplMuscleInfo) {
      this.$emit('clickNavigateToAddExerciseEvent', exTemplMuscleInfo)
    },
    clickNavigateToExerciseDescriptionEvent:function (exTemplMuscleInfo) {
      this.$emit('clickNavigateToExerciseDescriptionEvent',exTemplMuscleInfo)
    },
  },
  beforeMount() {
    this.getAllExTempMuscleInfo()
  }


}
</script>