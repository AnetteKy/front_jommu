<template>

    <table class="table">
      <AthleteWorkoutPlanTableHead/>
      <AthleteWorkoutPlanTableBody/>
    </table>

</template>
<script>

import AthleteWorkoutPlanTableHead from "@/components/AthleteWorkoutPlanTable/AthleteWorkoutPlanTableHead";
import AthleteWorkoutPlanTableBody from "@/components/AthleteWorkoutPlanTable/AthleteWorkoutPlanTableBody";

export default {
  name: 'AthleteWorkoutPlanTable',
  components: {AthleteWorkoutPlanTableHead, AthleteWorkoutPlanTableBody}
}
</script>