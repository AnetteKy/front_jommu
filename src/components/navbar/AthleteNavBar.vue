<template>
  <div>
    <nav class="container d-flex">
      <div class="col d-flex justify-content-end offset-3">
        <router-link to="/athlete/home">Kodu</router-link>
        |
        <router-link to="/athlete/workoutplan">Treeningkava</router-link>
        |
        <router-link to="/athlete/history">Ajalugu</router-link>
        |
        <router-link to="/athlete/exercise">Harjutused</router-link>
      </div>
      <div class="col d-flex justify-content-end">
        <button v-on:click="logout" type="button" class="btn btn-outline-secondary btn-sm m-2 justify-content-end">Logi
          välja
        </button>
      </div>
    </nav>
    <router-view/>


  </div>
</template>
<script>
export default {
  name: 'AthleteNavBar',
  methods: {
    logout: function () {
      this.$router.push({name: 'roleRoute'})
    },
  }
}
</script>
