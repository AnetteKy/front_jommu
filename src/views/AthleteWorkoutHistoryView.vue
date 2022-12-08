<template>
  <div class="motherFlex historyView">

    <div class="motherFlex d-flex flex-grow-1 flex-column">
      <div class="bg-light bg-opacity-75">
        <AthleteNavBar/>
      </div>
      <div class="bg-light bg-opacity-50">
        <label class="">Ajalugu</label>
      </div>
    </div>
  </div>
</template>

<script>

import AthleteNavBar from "@/components/navbar/AthleteNavBar";

export default {
  name: "AthleteWorkoutPlanHistoryView",
  components: {AthleteNavBar},

}
</script>

<style scoped>

</style>