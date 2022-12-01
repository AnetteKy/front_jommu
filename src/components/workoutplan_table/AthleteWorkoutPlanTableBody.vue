<template>
  <tbody>
  <tr>
    <th scope="row">blabla</th>
    <td>20</td>
    <td>3</td>
    <td>40</td>
    <td v-if="displayDeleteButton">
      <button type="button" class="col-5 m-1 btn btn-success btn-sm">Eemalda</button>
    </td>
  </tr>
  </tbody>
</template>
<script>
export default {
  name: 'AthleteTrainingProgramTableBody',

  data: function () {
    return{
      displayDeleteButton: false
    }
  }
}
</script>