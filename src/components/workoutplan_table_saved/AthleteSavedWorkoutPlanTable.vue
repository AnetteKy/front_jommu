<template>
  <table class="table">
    <AthleteSavedWorkoutPlanTableHead/>
    <AthleteSavedWorkoutPlanTableBody :workout-plan-infos="workoutPlanInfos" v-on="$listeners"/>
  </table>
</template>
<script>
import AthleteSavedWorkoutPlanTableHead from "@/components/workoutplan_table_saved/AthleteSavedWorkoutPlanTableHead";
import AthleteSavedWorkoutPlanTableBody from "@/components/workoutplan_table_saved/AthleteSavedWorkoutPlanTableBody";

export default {
  name: 'AthleteSavedWorkoutPlanTable',
  components: {AthleteSavedWorkoutPlanTableBody, AthleteSavedWorkoutPlanTableHead},
  props: {
    workoutPlanInfos: {}
  }
}
</script>