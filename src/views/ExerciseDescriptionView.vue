<template>

  <div class="motherFlex flex-column exerciseView">
    <div class="card col-6 offset-3">
      <img v-if="descriptionInfos.imgData === null " src="../images/default.jpg" class="myPicSize">
      <img v-else :src="descriptionInfos.imgData" class="myPicSize">

      <div class="card-body">
        <h5 class="card-title">{{ descriptionInfos.exerciseTempName }}</h5>
        <p class="card-text">{{ descriptionInfos.description }}</p>
        <button v-on:click="navigateToExerciseView" class="btn btn-primary">Sulge</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExerciseDescriptionView",
  data: function () {
    return {
      descriptionInfos: {
        exerciseTempId: '',
        exerciseTempName: '',
        description: '',
        imgData: ''
      }

    }
  },
  methods: {
    getDescriptionInfo: function () {
      this.$http.get("/description/info", {
            params: {
              exerciseTempId: this.descriptionInfos.exerciseTempId,
            }
          }
      ).then(response => {
        this.descriptionInfos = response.data
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },


    navigateToExerciseView: function () {
      this.$router.push({
        name: 'athleteExerciseRoute'
      })
    }

  },
  beforeMount() {
    this.getDescriptionInfo()

  }
}

</script>

