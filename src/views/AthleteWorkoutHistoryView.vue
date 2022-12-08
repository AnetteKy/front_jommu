<template>
  <div class="motherFlex historyView">

    <div class="motherFlex d-flex flex-grow-1 flex-column">
      <div class="">
        <AthleteNavBar/>
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