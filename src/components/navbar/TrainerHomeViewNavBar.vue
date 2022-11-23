<template>
  <div id="app">
    <nav>
      <router-link to="/trainer/home">Kodu</router-link>
      |
      <router-link to="/">Treeningkava</router-link>
      |
      <router-link to="/">Ajalugu</router-link>
      |
      <router-link to="/">Harjutused</router-link>
    </nav>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'TrainerHomeViewNavBar'
}
</script>
