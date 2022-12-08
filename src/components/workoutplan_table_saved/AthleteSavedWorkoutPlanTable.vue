<template>
  <table class="table">
    <tr v-for="workoutPlanTableInfo in workoutPlanInfos">
      <thead class="table">
      <tr>
        <th scope="col">Harjutus</th>
        <th scope="col">Kordus</th>
        <th scope="col">Seeria</th>
        <th scope="col">Raskus</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <th scope="row">{{ workoutPlanTableInfo.exerciseTemplateName }}</th>
        <td>{{ workoutPlanTableInfo.reps }}</td>
        <td>{{ workoutPlanTableInfo.sets }}</td>
        <td>{{ workoutPlanTableInfo.weight }}</td>
      </tr>
      </tbody>
    </tr>
  </table>
</template>
<script>


export default {
  name: 'AthleteSavedWorkoutPlanTable',
  props: {
    workoutPlanInfos: {}
  }
}
</script>