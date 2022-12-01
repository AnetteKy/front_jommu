<template>
  <div class="motherFlex registerView">
    <div class="borrrder container col-lg-4 d-flex align-items-center">
      <div class="row d-flex flex-grow-1">

        <h3 class="text-white mb-4"><em>Registreeri juba täna!</em></h3>

        <div class="input-group mb-3">
          <span class="input-group-text" id="inputGroup-sizing-default">Eesnimi</span>
          <input v-model="registerRequest.firstName" type="text" class="shadow-lg bg-transparent form-control"
                 aria-label="Sizing example input"
                 aria-describedby="inputGroup-sizing-default">
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text" id="inputGroup-sizing-default">Perekonnanimi</span>
          <input v-model="registerRequest.lastName" type="text" class="shadow-lg bg-transparent form-control"
                 aria-label="Sizing example input"
                 aria-describedby="inputGroup-sizing-default">
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text" id="inputGroup-sizing-default">Sünniaeg</span>
          <input v-model="registerRequest.dateOfBirth" type="date" class="shadow-lg bg-transparent form-control"
                 aria-label="Sizing example input"
                 aria-describedby="inputGroup-sizing-default">
        </div>

        <div class="input-group mb-3">
          <div class="text form-check m-2" v-for="singleGender in genders">
            <input v-model="registerRequest.gender" v-bind:value="singleGender.code"
                   class="shadow-lg bg-transparent form-check-input" type="radio"
                   name="flexRadioDefault" id="flexRadioDefault1">
            <label class="form-check-label" for="flexRadioDefault1">
              {{ singleGender.description }}
            </label>
          </div>
        </div>


        <div class="input-group mb-3">
          <span class="input-group-text" id="inputGroup-sizing-default">E-mail</span>
          <input v-model="registerRequest.email" type="text" class="shadow-lg bg-transparent form-control"
                 aria-label="Sizing example input"
                 aria-describedby="inputGroup-sizing-default">
        </div>


        <div>
          <select v-model="registerRequest.roleId" class="shadow-lg bg-transparent form-select mb-3"
                  aria-label="Default select example">
            <option selected disabled>Vali roll</option>
            <option v-for="role in roles" :key="role.roleId" :value="role.roleId">{{ role.roleType }}</option>

          </select>
        </div>


        <div class="input-group mb-3">
          <span class="input-group-text" id="inputGroup-sizing-default">Kasutajanimi</span>
          <input v-model="registerRequest.username" type="text" class="shadow-lg bg-transparent form-control"
                 aria-label="Sizing example input"
                 aria-describedby="inputGroup-sizing-default">
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text" id="inputGroup-sizing-default">Parool</span>
          <input v-model="registerRequest.password" type="password" class="shadow-lg bg-transparent form-control"
                 aria-label="Sizing example input"
                 aria-describedby="inputGroup-sizing-default">
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text" id="inputGroup-sizing-default">Parool uuesti</span>
          <input v-model="registerRequest.password" type="password" class="shadow-lg bg-transparent form-control"
                 aria-label="Sizing example input"
                 aria-describedby="inputGroup-sizing-default">
        </div>

        <div class="input-group mb-3">
          <div class="form-check">
            <input v-model="registerRequest.termsAccept" class="form-check-input" type="checkbox" value=""
                   id="flexCheckDefault">
            <label class="text-white form-check-label" for="flexCheckDefault">
              Olen kasutajatingimustega nõus
            </label>
          </div>
        </div>

        <div>
          <button v-on:click="registerUser" class="btn col-lg-5 btn-secondary m-3" type="submit">Registreeri</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterView",

  data: function () {
    return {

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
      registerRequest: {
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        gender: 'F',
        roleId: Number(sessionStorage.getItem('roleId')),
        email: '',
        termsAccept: false,
        username: '',
        password: '',
      },
      registerResponse: {
        userId: 0,
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

      this.$http.post("/register", this.registerRequest
      ).then(response => {
        this.navigateToNextPage()
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      });
    },

    navigateToNextPage: function () {
      sessionStorage.setItem('username', this.registerRequest.username)
      sessionStorage.setItem('userId', this.registerResponse.userId)
      if (this.registerRequest.roleId === 1) {
        this.$router.push({name: 'trainerHomeRoute'});
      } else {
        this.$router.push({name: 'athleteHomeRoute'})
      }

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
  },

  beforeMount() {
    this.getRolesDropdownInfo()
  }
}
</script>

<style scoped>


</style>