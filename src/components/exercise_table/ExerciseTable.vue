<template>
  <table class="table table-hover table-bordered exerciseViewTable1">
    <ExerciseTableHead/>
    <ExerciseTableBody v-on="$listeners" />
  </table>
</template>
<script>
import ExerciseTableHead from "@/components/exercise_table/ExerciseTableHead";
import ExerciseTableBody from "@/components/exercise_table/ExerciseTableBody";

export default {
  props: {
    exTempMuscleGroupInfos: {}
  },
  name: 'ExercisesTable',
  components: {ExerciseTableBody, ExerciseTableHead}
}
</script>