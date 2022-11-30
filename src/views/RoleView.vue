<template>
  <!--  <div>-->
  <!--    <div class="row align-items-start">-->
  <!--      <img src="../assets/logo.png">-->
  <!--    </div>-->

  <div class="container d-flex justify-content-around align-items-center">
    <div class="row d-flex flex-grow-1">


      <div class="col m-5">
        <button v-on:click="displayTrainerLoginOnClick" type="button" class="btn btn-outline-primary btn-lg">TREENER
        </button>

        <TrainerLogin v-if="displayTrainerLogin"/>

      </div>

      <div class="col m-5">
        <button v-on:click="displayAthleteLoginOnClick" type="button" class="btn btn-outline-success btn-lg">
          TREENIJA
        </button>

        <AthleteLogin v-if="displayAthleteLogin"/>

      </div>

    </div>
  </div>
  <!--  </div>-->
</template>

<script>
// @ is an alias to /src

import TrainerLogin from "@/components/login/TrainerLogin";
import AthleteLogin from "@/components/login/AthleteLogin";

export default {
  name: 'HomeView',
  components: {AthleteLogin, TrainerLogin},

  data: function () {
    return {
      displayTrainerLogin: false,
      displayAthleteLogin: false,
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
