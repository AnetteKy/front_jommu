<template>
  <div class="motherFlex d-flex flex-grow-1 flex-column">

    <AthleteNavBar/>

    <Logout :logout="logout"/>

  </div>
</template>

<script>
import Logout from "@/views/Logout";
import AthleteNavBar from "@/components/navbar/AthleteNavBar";

export default {
  name: "AthleteWorkoutPlanHistoryView",
  components: {Logout, AthleteNavBar},

  methods: {
    logout: function () {
      this.$router.push({name: 'roleRoute'})
    },
  }
}
</script>

<style scoped>

</style>