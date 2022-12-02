<template>
  <tbody>
  <tr v-for="extemplmuscleinfo in exTempMuscleGroupInfos">
    <th scope="row">{{extemplmuscleinfo.exerciseTemplateName}}</th>
    <td>{{extemplmuscleinfo.muscleGroupName}}</td>
    <td>Button LISA</td>
    <td>Button VAATA</td>
  </tr>
  </tbody>
</template>
<script>
export default {
  name: 'ExerciseTableBody',

  data: function () {
    return {
      exTempMuscleGroupInfos: {
        exTempMuscleGroupId: 0,
        exerciseTemplateId: 0,
        exerciseTemplateName: '',
        exerciseTemplateDescription: '',
        exerciseTemplateImgData: '',
        muscleGroupId: 0,
        muscleGroupName: ''
      }
    }
  },

  methods: {

    getAllExTempMuscleInfo: function () {
      this.$http.get("/extempmusclegroup")
          .then(response => {
            this.exTempMuscleGroupInfos = response.data
            console.log(response.data)
          })
          .catch(error => {
            console.log(error)
          })
    },

  },
  beforeMount() {
    this.getAllExTempMuscleInfo()
  }


}
</script>