<template>
  <div class="motherFlex adminView">
    <div class="bg-light bg-opacity-75 container col-lg-4 d-flex align-items-center ">
      <div class="col-md-12">
        <h3>Lisa harjutusele pilt</h3>
        <select v-on:change="getExTempPicture" v-model="pictureInfo.exerciseTempId" class="form-select mb-2"
                aria-label="Default select example">
          <option selected disabled value="0">Vali harjutus</option>
          <option v-for="template in exerciseTemplates" :key="template.exerciseTempId" :value="template.exerciseTempId">
            {{ template.exerciseTempName }}
          </option>
        </select>

        <div>
          <ImageInput @pictureInputSuccess="setPicture"/>
        </div>

        <button v-on:click="addPicture" type="button" class="btn btn-primary mb-2">Salvesta pilt</button>

        <div v-if="pictureInfo.imgData === 'null'">
          <img src="../images/default.jpg" class="myPicSize">
        </div>
        <div v-else>
          <img :src="pictureInfo.imgData" class="myPicSize">
        </div>
<!--        <div class="mb-3">-->
<!--          <label for="exampleFormControlTextarea1" class="form-label">Sisesta harjutuse kirjeldus</label>-->
<!--          <textarea class="form-control mb-2" id="exampleFormControlTextarea1" rows="5"></textarea>-->
<!--          <button v-on:click="addDescription" type="button" class="btn btn-primary mb-2">Salvesta kirjeldus</button>-->
<!--        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
import ImageInput from "@/components/image/ImageInput";
export default {
  name: "AdminView",
  components: {ImageInput},
  data: function () {
    return {

      exerciseTemplates: {
        exerciseTempId: 0,
        exerciseTempName: '',
        description: '',
        imgData: 'null'
      },

      pictureInfo: {
        exerciseTempId: 0,
        imgData: 'null',
      },

      pictureResponse: {
        exerciseTempId: 0,
        imgData: 'null',
      }

    }
  },

  methods: {

    getAllExerciseInfo: function () {
      this.$http.get("/exercise/info")
          .then(response => {
            this.exerciseTemplates = response.data
            console.log(response.data)
          })
          .catch(error => {
            console.log(error)
          })
    },

    setPicture: function (picture) {
      this.pictureInfo.imgData = picture
    },

    addPicture: function () {

      this.$http.patch("/photo", this.pictureInfo
      ).then(response => {
        alert("Pildi lisamine õnnestus!")
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },

    getExTempPicture: function () {
      this.$http.get("/photo", {
            params: {
              exerciseTempId: this.pictureInfo.exerciseTempId,
            }
          }
      ).then(response => {
        this.pictureInfo.imgData = response.data.imgData
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },

  },

  beforeMount() {
    this.getAllExerciseInfo()
  }
}
</script>
