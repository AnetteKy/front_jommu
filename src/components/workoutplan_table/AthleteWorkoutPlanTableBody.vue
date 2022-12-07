<template>
  <tbody>
  <tr v-for="exerciseTableInfo in exerciseTableInfos" >
    <th scope="row">{{exerciseTableInfo.exerciseTemplateName}}</th>
    <td>{{exerciseTableInfo.reps}}</td>
    <td>{{exerciseTableInfo.sets}}</td>
    <td>{{exerciseTableInfo.weight}}</td>
    <td>
      <font-awesome-icon v-on:click="deleteExerciseFromTableEvent(exerciseTableInfo)" icon="fa-solid fa-trash" />
<!--      <button v-on:click="deleteExerciseFromTableEvent(exerciseTableInfo)" type="button" class="col-6 m-1 btn btn-success btn-sm">Eemalda</button>-->
    </td>
  </tr>
  </tbody>
</template>
<script>
export default {
  name: 'AthleteWorkoutPlanTableBody',
  props: {
    exerciseTableInfos: {}
  },
  data: function () {
    return {}
  },
  methods: {

    deleteExerciseFromTableEvent: function (exerciseTableInfo) {
      this.$emit('deleteExerciseFromTableEvent', exerciseTableInfo)
    }
  }
}
</script>