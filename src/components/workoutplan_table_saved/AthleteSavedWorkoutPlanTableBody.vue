<template>
  <tbody>

  <tr v-for="workoutPlanTableInfo in workoutPlanInfos">
    <th scope="row">{{workoutPlanTableInfo.exerciseTemplateName}}</th>
    <td>{{workoutPlanTableInfo.reps}}</td>
    <td>{{workoutPlanTableInfo.sets}}</td>
    <td>{{workoutPlanTableInfo.weight}}</td>
  </tr>
  </tbody>
</template>
<script>
export default {
  name: 'AthleteSavedWorkoutPlanTableBody',
  props: {
    workoutPlanInfos: {}
  }
}
</script>