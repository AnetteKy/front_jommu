<template>

    <table class="table">
      <AthleteWorkoutPlanTableHead/>
      <AthleteWorkoutPlanTableBody/>
    </table>

</template>
<script>

import AthleteWorkoutPlanTableHead from "@/components/workoutplan_table/AthleteWorkoutPlanTableHead";
import AthleteWorkoutPlanTableBody from "@/components/workoutplan_table/AthleteWorkoutPlanTableBody";

export default {
  name: 'AthleteWorkoutPlanTable',
  components: {AthleteWorkoutPlanTableHead, AthleteWorkoutPlanTableBody}
}
</script>