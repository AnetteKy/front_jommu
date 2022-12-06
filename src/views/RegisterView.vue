<template>
  <div class="motherFlex registerView">
    <div class="opacityregister container col-lg-4 d-flex align-items-center ">
      <div class="row d-flex flex-grow-1">

        <h3 class="text-white mb-4"><em>Registreeri juba täna!</em></h3>

        <div class="input-group mb-3">
          <span class="input-group-text" id="inputGroup-sizing-default">Eesnimi</span>
          <input v-model="registerRequest.firstName" type="text" class="shadow-lg form-control inpubox-style"
                 aria-label="Sizing example input"
                 aria-describedby="inputGroup-sizing-default">
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text" id="inputGroup-sizing-default">Perekonnanimi</span>
          <input v-model="registerRequest.lastName" type="text" class="shadow-lg form-control inpubox-style"
                 aria-label="Sizing example input"
                 aria-describedby="inputGroup-sizing-default">
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text" id="inputGroup-sizing-default">Sünniaeg</span>
          <input v-model="registerRequest.dateOfBirth" type="date" class="shadow-lg form-control inpubox-style"
                 aria-label="Sizing example input"
                 aria-describedby="inputGroup-sizing-default">
        </div>


<!--        <div class="row-cols-2 mb-3">-->
<!--          <input type="checkbox" class="btn-check" id="btn-check-1" checked autocomplete="off">-->
<!--          <label class="btn btn-light" for="btn-check-1">Naine</label>-->
<!--          <label class="btn btn-light" for="btn-check-2">Mees</label>-->
<!--        </div>-->



        <div class="input-group mb-3">
          <div class="text form-check m-2" v-for="singleGender in genders">
            <input v-model="registerRequest.gender" v-bind:value="singleGender.code"
                   class="shadow-lg form-check-input" type="radio"
                   name="flexRadioDefault" id="flexRadioDefault1">
            <label class="form-check-label" for="flexRadioDefault1">
              {{ singleGender.description }}
            </label>
          </div>
        </div>


        <div class="input-group mb-3">
          <span class="input-group-text" id="inputGroup-sizing-default">E-mail</span>
          <input v-model="registerRequest.email" type="text" class="shadow-lg form-control inpubox-style"
                 aria-label="Sizing example input"
                 aria-describedby="inputGroup-sizing-default">
        </div>


        <div>
          <select v-model="registerRequest.roleId" class="shadow-lg form-select mb-3 inpubox-style"
                  aria-label="Default select example">
            <option selected disabled>Vali roll</option>
            <option v-for="role in roles" :key="role.roleId" :value="role.roleId">{{ role.roleType }}</option>

          </select>
        </div>


        <div class="input-group mb-3">
          <span class="input-group-text" id="inputGroup-sizing-default">Kasutajanimi</span>
          <input v-model="registerRequest.username" type="text" class="shadow-lg form-control inpubox-style"
                 aria-label="Sizing example input"
                 aria-describedby="inputGroup-sizing-default">
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text" id="inputGroup-sizing-default">Parool</span>
          <input v-model="registerRequest.password" type="password" class="shadow-lg form-control inpubox-style"
                 aria-label="Sizing example input"
                 aria-describedby="inputGroup-sizing-default">
        </div>

      <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-default">Parool uuesti</span>
        <input v-model="passwordAgain" type="password" class="shadow-lg form-control inpubox-style" aria-label="Sizing example input"
               aria-describedby="inputGroup-sizing-default">
      </div>

        <AlertError :error-response="errorResponse"/>

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
          <button v-on:click="registerUser" class="btn col-lg-5 btn-outline-light m-3" type="submit">Registreeri</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AlertError from "@/components/alert/AlertError";

export default {
  name: "RegisterView",
  components: {AlertError},

  data: function () {
    return {
      passwordAgain: '',
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
      ],
      errorResponse: {
        message: '',
        errorCode: 0
      }
    }
  },
  methods: {

    registerUser: function () {

      this.errorResponse.message = ''
      if (this.passwordAgain !== this.registerRequest.password) {
        this.errorResponse.message = 'Paroolid ei ühti!';
      } else {



      this.$http.post("/register", this.registerRequest
      ).then(response => {
        this.registerResponse = response.data
          this.navigateToNextPage();
        sessionStorage.setItem('userId', this.registerResponse.userId)
          console.log(response.data);
      }).catch(error => {
        console.log(error)
      });
      }
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
            this.errorResponse = error.response.data
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