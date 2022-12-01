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
    </nav>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'AthleteNavBar'
}
</script>
