<template>
    <thead class="table-success">
    <tr>
      <th scope="col">Harjutus</th>
      <th scope="col">Kordus</th>
      <th scope="col">Seeria</th>
      <th scope="col">Raskus</th>
      <th v-if="displayDeleteButton" scope="col">****</th>
    </tr>
    </thead>
</template>
<script>
export default {
  name: 'AthleteTrainingProgramTableHead',

  data: function () {
    return{
      displayDeleteButton: false
    }
  }
}
</script>