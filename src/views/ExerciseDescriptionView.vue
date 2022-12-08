<template>

  <div class="motherFlex flex-column exerciseView">
    <div class="mt-5 card col-6 offset-3">
      <div v-if="descriptionInfos.imgData == 'null' ">
        <img src="../images/default.jpg" class="myPicSize">
      </div>
      <div v-else>
        <img :src="descriptionInfos.imgData" class="myPicSize">
      </div>
      <div class="card-body">
        <h5 class="card-title">{{ descriptionInfos.exerciseTempName }}</h5>
        <p class="card-text">{{ descriptionInfos.description }}</p>
        <button v-on:click="navigateToExerciseView" class="btn btn-secondary">Sulge</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExerciseDescriptionView",
  data: function () {
    return {
      exerciseTempId: this.$route.query.exerciseTemplateId,
      descriptionInfos: {
        exerciseTempName: '',
        description: '',
        imgData: 'null'
      }

    }
  },
  methods: {
    getDescriptionInfo: function () {
      this.$http.get("/description/info", {
            params: {
              exerciseTempId: this.exerciseTempId,
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

