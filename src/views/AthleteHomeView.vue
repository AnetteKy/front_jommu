<template>
<div>
  <AthleteHomeViewNavBar/>

  <div>
    <h1>Tere tulemast, {{firstName}}</h1>
    <br>
    <h4>Päevatsitaat: "Fitness - if it came in a bottle, everybody would have a great body."</h4>
  </div>

</div>
</template>

<script>
import AthleteHomeViewNavBar from "@/components/navbar/AthleteHomeViewNavBar";

export default {
  name: "AthleteHomeView",
  components: {AthleteHomeViewNavBar},
  data: function () {
    return {
      loginInfo: this.$route.query.loginInfo
    }
  }
}
</script>

