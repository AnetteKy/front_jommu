<template>
  <div>
    <nav>
      <router-link to="/athlete/home">Kodu</router-link>
      |
      <router-link to="/athlete/workoutplan">Treeningkava</router-link>
      |
      <router-link to="/athlete/history">Ajalugu</router-link>
      |
      <router-link to="/athlete/exercise">Harjutused</router-link>


        <button v-on:click="logout" type="button" class="btn btn-outline-secondary btn-sm m-2">Logi välja</button>

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
