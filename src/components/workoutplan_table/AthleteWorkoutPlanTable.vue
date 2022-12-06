<template>

  <table class="table">
    <AthleteWorkoutPlanTableHead/>
    <AthleteWorkoutPlanTableBody :exercise-table-infos="exerciseTableInfos" v-on="$listeners"/>
  </table>

</template>
<script>

import AthleteWorkoutPlanTableHead from "@/components/workoutplan_table/AthleteWorkoutPlanTableHead";
import AthleteWorkoutPlanTableBody from "@/components/workoutplan_table/AthleteWorkoutPlanTableBody";

export default {
  name: 'AthleteWorkoutPlanTable',
  components: {AthleteWorkoutPlanTableHead, AthleteWorkoutPlanTableBody},
  props: {
    exerciseTableInfos: {}
  }
}
</script>