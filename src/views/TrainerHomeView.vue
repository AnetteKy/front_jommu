<template>
<div>
  <TrainerHomeViewNavBar/>

</div>
</template>

<script>
import TrainerHomeViewNavBar from "@/components/navbar/TrainerHomeViewNavBar";

export default {
  name: "TrainerHomeView",
  components: {TrainerHomeViewNavBar},
  data: function () {
    return {
      loginInfo: this.$route.query.loginInfo
    }
  }
}
</script>

