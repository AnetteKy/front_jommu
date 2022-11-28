<template>
  <div class="container d-flex justify-content-around align-items-center">
    <div class="row d-flex flex-grow-1">

      <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-default">Eesnimi</span>
        <input v-model="userRequest.firstName" type="text" class="form-control" aria-label="Sizing example input"
               aria-describedby="inputGroup-sizing-default">
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-default">Perekonnanimi</span>
        <input v-model="userRequest.lastName" type="text" class="form-control" aria-label="Sizing example input"
               aria-describedby="inputGroup-sizing-default">
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-default">Sünniaeg</span>
        <input v-model="userRequest.dateOfBirth" type="date" class="form-control" aria-label="Sizing example input"
               aria-describedby="inputGroup-sizing-default">
      </div>

      <div class="form-check" v-for="singleGender in genders">
        <input v-model="userRequest.gender" v-bind:value="singleGender.code" class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
        <label class="form-check-label" for="flexRadioDefault1">
          {{singleGender.description}}
        </label>
      </div>


      <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-default">E-mail</span>
        <input v-model="userRequest.email" type="text" class="form-control" aria-label="Sizing example input"
               aria-describedby="inputGroup-sizing-default">
      </div>

      <div>
        <select v-on:change="clickSelectedRoleEvent" class="form-select mb-3" aria-label="Default select example">
          <option selected disabled>{{this.selectedRole}}</option>
          <option v-for="role in roles" :key="role.roleId" :value="role.roleId">{{ role.roleType }}</option>

        </select>
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-default">Kasutajanimi</span>
        <input v-model="userRequest.username" type="text" class="form-control" aria-label="Sizing example input"
               aria-describedby="inputGroup-sizing-default">
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-default">Parool</span>
        <input v-model="userRequest.password" type="password" class="form-control" aria-label="Sizing example input"
               aria-describedby="inputGroup-sizing-default">
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-default">Parool uuesti</span>
        <input v-model="userRequest.password" type="password" class="form-control" aria-label="Sizing example input"
               aria-describedby="inputGroup-sizing-default">
      </div>

      <div class="form-check">
        <input v-model="userRequest.termsAccept" class="form-check-input" type="checkbox" value=""
               id="flexCheckDefault">
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
  name: "RegisterView",

  data: function () {
    return {

      selectedRole: sessionStorage.getItem('roletype'),

      roleTypes: [
        {
          roleId: 0,
          roleType: ''
        }
      ],

      genders: [
        {
          code: 'F',
          description: 'Naine'
        },
        {
          code: 'M',
          description: 'Mees'
        }
      ],
      userRequest: {
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        gender: 'F',
        email: '',
        termsAccept: '',
        username: '',
        password: '',
      },
      registerResponse: {
        userId: 0,
        roleId: 0,
        roleType: ''
      },

      roles: [
        {
          roleId: 0,
          roleType: ''
        }
      ]
    }
  },
  methods: {

    registerUser: function () {

      if (this.selectedRole === 'Treener') {
        this.$router.push({name: 'trainerHomeRoute'});
      } else {
        this.$router.push({name: 'athleteHomeRoute'})
      }

      // if (this.registerResponse.roleType === 'Treener') {
      //   this.$router.push({name: 'trainerHomeRoute'});
      // } else {
      //   this.$router.push({name: 'athleteHomeRoute'})
      //
      // }
      this.$http.post("/register", this.userRequest
      ).then(response => {
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      });
    },

    getRolesDropdownInfo: function () {
      this.$http.get("/role")
          .then(response => {
            this.roles = response.data
            console.log(response.data)
          })
          .catch(error => {
            console.log(error)
          })
    },

    // clickSelectedRoleEvent: function () {
    //   if (this.roles[0]) {
    //     this.$router.push({name: 'trainerHomeRoute'});
    //   } else {
    //     this.$router.push({name: 'athleteHomeRoute'})
    //   }
    // }
  },

  beforeMount() {
    this.getRolesDropdownInfo()
  }
}
</script>

<style scoped>

</style>