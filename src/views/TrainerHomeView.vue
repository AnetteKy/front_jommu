<template>
<div>
  <TrainerHomeViewNavBar/>
  <div>
    <h1>Tere tulemast, {{username}}</h1>
  </div>

</div>
</template>

<script>
import TrainerHomeViewNavBar from "@/components/navbar/TrainerHomeViewNavBar";

export default {
  name: "TrainerHomeView",
  components: {TrainerHomeViewNavBar},
  data: function () {
    return {
      // loginInfo: this.$route.query.loginInfo
      username: this.$route.query.username

    }
  }
}
</script>

