<template>

    <table class="table">
      <AthleteWorkoutPlanTableHead/>
      <AthleteWorkoutPlanTableBody/>
    </table>

</template>
<script>

import AthleteWorkoutPlanTableHead from "@/views/AthleteWorkoutPlanTableHead";
import AthleteWorkoutPlanTableBody from "@/views/AthleteWorkoutPlanTableBody";

export default {
  name: 'AthleteWorkoutPlanTable',
  components: {AthleteWorkoutPlanTableHead, AthleteWorkoutPlanTableBody}
}
</script>