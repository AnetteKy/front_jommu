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
        <input placeholder="Parool" type="password" class="form-control " aria-label="Sizing example input"
               aria-describedby="inputGroup-sizing-default" v-model="password">
      </div>
    </div>
    <button v-on:click="athleteLogin" class="btn btn-success" type="submit">Logi sisse</button>
    <div class="row justify-content-center">
      <label class="mt-5">Ei oma veel kontot?</label>
      <button type="button" class="btn btn-secondary btn-sm w-25">Registreeri</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AthleteLogin',

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
    athleteLogin: function () {
      this.$http.get("/login", {
            params: {
              username: this.username,
              password: this.password,
              roleType: 'Treenitav'
            }
          }
      ).then(response => {
        this.loginInfo = response.data
        this.$router.push({name: 'athleteHomeRoute', query: {
          username: this.username
        }})
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },
  }

}
</script>