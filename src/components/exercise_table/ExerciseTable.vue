<template>
  <table class="table table-hover table-bordered">
    <ExerciseTableHead/>
    <ExerciseTableBody/>
  </table>
</template>
<script>
import ExerciseTableHead from "@/components/exercise_table/ExerciseTableHead";
import ExerciseTableBody from "@/components/exercise_table/ExerciseTableBody";

export default {
  name: 'ExercisesTabe',
  components: {ExerciseTableBody, ExerciseTableHead}
}
</script>