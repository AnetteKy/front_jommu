<template>
  <tbody class="">
  <tr v-for="exTemplMuscleInfo in exTempMuscleGroupInfos">
    <th scope="row">{{ exTemplMuscleInfo.exerciseTemplateName }}</th>
    <td>{{ exTemplMuscleInfo.muscleGroupName }}</td>
    <td>
      <button v-on:click="clickNavigateToAddExerciseEvent(exTemplMuscleInfo)" type="button"
              class="btn btn-outline-dark btn-sm">+Lisa
      </button>
    </td>
    <td>
      <button v-on:click="clickNavigateToExerciseDescriptionEvent(exTemplMuscleInfo.exerciseTemplateId)"
              type="button" class="btn btn-secondary btn-sm">Vaata</button>
    </td>
  </tr>
  </tbody>
</template>
<script>
export default {
  name: 'ExerciseTableBody',
  props: {
    exTempMuscleGroupInfos: {}
  },


  methods: {

    clickNavigateToAddExerciseEvent: function (exTemplMuscleInfo) {
      this.$emit('clickNavigateToAddExerciseEvent', exTemplMuscleInfo)
    },
    clickNavigateToExerciseDescriptionEvent:function (exerciseTemplateId) {
      this.$emit('clickNavigateToExerciseDescriptionEvent', exerciseTemplateId)
    },
  },


}
</script>