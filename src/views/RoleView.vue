<template>
  <div>

    <div class="container">
      <!--      <div class="row m-5"></div>-->
      <!--      <div class="row m-5"></div>-->
      <!--      <div class="row m-5"></div>-->
      <div class="row justify-content-center">

        <div class="col col-lg-2 m-5">
          <button v-on:click="displayTrainerLoginOnClick" type="button" class="btn btn-outline-primary">TREENER</button>

          <TrainerLogin v-if="displayTrainerLogin"/>

        </div>

        <div class="col col-lg-2 m-5">
          <button v-on:click="displayAthleteLoginOnClick" type="button" class="btn btn-outline-success">TREENITAV</button>

          <AthleteLogin v-if="displayAthleteLogin"/>

        </div>

      </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src

import TrainerLogin from "@/components/TrainerLogin";
import AthleteLogin from "@/components/AthleteLogin";

export default {
  name: 'HomeView',
  components: {AthleteLogin, TrainerLogin},

  data: function () {
    return {
      displayTrainerLogin: false,
      displayAthleteLogin: false
    }
  },

  methods: {
    displayTrainerLoginOnClick: function () {
      this.displayTrainerLogin = true
    },
    displayAthleteLoginOnClick: function () {
      this.displayAthleteLogin = true
    }
  }

}


</script>
