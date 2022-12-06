<template>
  <tbody>
  <tr v-for="exerciseTableInfo in exerciseTableInfos" >
    <th scope="row">{{exerciseTableInfo.exerciseTemplateName}}</th>
    <td>{{exerciseTableInfo.reps}}</td>
    <td>{{exerciseTableInfo.sets}}</td>
    <td>{{exerciseTableInfo.weight}}</td>
    <td>
      <button type="button" class="col-6 m-1 btn btn-success btn-sm">Eemalda</button>
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
  }
}
</script>