<template>
  <div class="container d-flex justify-content-around align-items-center">
    <div class="row d-flex flex-grow-1">

      <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-default">Eesnimi</span>
        <input type="text" class="form-control" aria-label="Sizing example input"
               aria-describedby="inputGroup-sizing-default">
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-default">Perekonnanimi</span>
        <input type="text" class="form-control" aria-label="Sizing example input"
               aria-describedby="inputGroup-sizing-default">
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-default">Sünniaeg</span>
        <input type="date" class="form-control" aria-label="Sizing example input"
               aria-describedby="inputGroup-sizing-default">
      </div>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
        <label class="form-check-label" for="flexRadioDefault1">
          Mees
        </label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
        <label class="form-check-label" for="flexRadioDefault2">
          Naine
        </label>
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-default">E-mail</span>
        <input type="text" class="form-control" aria-label="Sizing example input"
               aria-describedby="inputGroup-sizing-default">
      </div>

      <div>
        <select class="form-select mb-3" aria-label="Default select example">
          <option v-model:selected="selectedRoleType">siia tuleb info nupult</option>
          <option v-for="role in roleTypes" :key="role.roleId" :value="role.roleId">{{ role.roleType }}</option>

        </select>
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-default">Kasutajanimi</span>
        <input type="text" class="form-control" aria-label="Sizing example input"
               aria-describedby="inputGroup-sizing-default">
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-default">Parool</span>
        <input type="text" class="form-control" aria-label="Sizing example input"
               aria-describedby="inputGroup-sizing-default">
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-default">Parool uuesti</span>
        <input type="text" class="form-control" aria-label="Sizing example input"
               aria-describedby="inputGroup-sizing-default">
      </div>

      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
        <label class="form-check-label" for="flexCheckDefault">
          Olen kasutajatingimustega nõus
        </label>
      </div>

      <div>
        <button v-on:click="registerUser" class="btn btn-success" type="submit">Registreeri</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterView',

  data: function () {
    return {

      athlete: sessionStorage.getItem('athlete'),
      trainer: sessionStorage.getItem('trainer'),


      roleTypes: [
        {
          roleId: 0,
          roleType: ''
        }
      ],

      userRequest: {
        firstName: '',
        lastName: '',
        birthDate: '',
        sex: '',
        email: '',
        termsAccept: '',
        loginInfo: {
          username: '',
          password: '',
        }
      },
      registerResponse: {
        userId: 0,
        roleId: 0,
        roleType: ''
      }
    }
  },
  methods: {

    selectedRoleType: function () {
      if (sessionStorage.getItem('athlete')) {
        return this.athlete;
      } else {
        return this.trainer
      }

    },

    registerUser: function () {

      if (this.registerResponse.roleType === 'Treener') {
        this.$router.push({name: 'trainerHomeRoute'});
      } else {
        this.$router.push({name: 'athleteHomeRoute'})

      }

      this.$http.post("/register", this.userRequest
      ).then(response => {
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },
  }
}
</script>

<style scoped>

</style>