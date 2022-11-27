<template>
  <div>
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
    <button v-on:click="trainerLogin" class="btn btn-primary" type="submit">Logi sisse</button>
    <div class="row justify-content-center">
      <label class="mt-5">Ei oma veel kontot?</label>
      <button v-on:click="trainerRegister" type="button" class="btn btn-secondary btn-sm w-25">Registreeri</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TrainerLogin',
  data: function () {
    return {
      username: '',
      password: '',
      errorMessage: '',
      loginInfo: {
        userId: '',
        roles: [
          {
            roleType: ''
          }
        ]

      }
    }
  },

  methods: {

    trainerRegister: function () {
      this.$router.push({name: 'registerRoute'})
    },

    trainerLogin: function () {
      this.$http.get("/login", {
            params: {
              username: this.username,
              password: this.password,
              roleType: 'Treener'
            }
          }
      ).then(response => {
        this.loginInfo = response.data
        sessionStorage.setItem('username', this.username)
        this.$router.push({name: 'trainerHomeRoute'})
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },
  }

}
</script>