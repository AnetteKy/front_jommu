<template>
  <div class="opacityrole">
    <div class="row justify-content-center m-3">
      <div class="input-group w-50">
        <input placeholder="Kasutajanimi" type="text" class="form-control" aria-label="Sizing example input"
               aria-describedby="inputGroup-sizing-default" v-model="username">
      </div>
    </div>
    <div class="row justify-content-center m-3">
      <div class="input-group w-50">
        <input placeholder="Parool" type="password" class="form-control" aria-label="Sizing example input"
               aria-describedby="inputGroup-sizing-default" v-model="password">
      </div>
    </div>

    <AlertError :error-response="errorResponse"/>

    <button v-on:click="athleteLogin" class="col-4 offset-4  button-29" type="submit">Logi sisse</button>
    <div class="row justify-content-center">
      <label class="mt-5"><b>Ei oma veel kontot?</b></label>
      <button v-on:click="athleteRegister" type="button" class="btn btn-secondary btn-sm w-25 mb-5">Registreeri</button>
    </div>
  </div>
</template>
<script>
import AlertError from "@/components/alert/AlertError";

export default {
  name: 'AthleteLogin',
  components: {AlertError},
  data: function () {
    return {
      username: '',
      password: '',

      loginResponse: {
        userId: '',
        roleId: 0,
        roleType: ''
      },
      errorResponse: {
        message: '',
        errorCode: 0
      }
    }
  },

  methods: {

    athleteRegister: function () {
      sessionStorage.setItem('roleId', 2)
      this.$router.push({name: 'registerRoute'})
    },

    athleteLogin: function () {
      sessionStorage.setItem('roleId', 2)
      this.errorResponse.message = ''
      if (this.username.length === 0 || this.password.length === 0) {
        this.errorResponse.message = 'Palun täida kõik väljad';
      } else {

        this.$http.get("/login", {
              params: {
                username: this.username,
                password: this.password,
                roleType: 'Treenija'
              }
            }
        ).then(response => {
          this.loginResponse = response.data
          sessionStorage.setItem('username', this.username)
          sessionStorage.setItem('userId', this.loginResponse.userId)
          this.$router.push({name: 'athleteHomeRoute'})
          console.log(response.data)
        }).catch(error => {
          this.errorResponse = error.response.data
        });
      }
    },

  }

}
</script>