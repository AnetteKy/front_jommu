<template>

  <div class="motherFlex flex-column exerciseView">
    <div class="card offset-lg-5" style="width: 24rem;">
      <img src="https://menspower.nl/wp-content/uploads/2018/03/barbell-romanian-deadlift.gif" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">Jõutõmme</h5>
        <p class="card-text">Kirjeldus, mis võetakse admin lehelt</p>
        <button v-on:click="navigateToExerciseView" class="btn btn-primary">Sulge</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExerciseDescriptionView",
  methods: {
    navigateToExerciseView: function () {
      this.$router.push({
        name: 'athleteExerciseRoute'
      })
    }

  }
}

</script>

