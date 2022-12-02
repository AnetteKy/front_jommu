<template>
  <div class="col-3">

    <select v-on:change="getExTempPicture" v-model="pictureInfo.exerciseTempId" class="form-select" aria-label="Default select example">
      <option selected disabled value="0">Vali harjutus</option>
      <option v-for="template in exerciseTemplates" :key="template.exerciseTempId" :value="template.exerciseTempId">{{ template.exerciseTempName }}</option>
    </select>

<!--        <div class="dropdown">-->
<!--          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"-->
<!--                  aria-expanded="false">-->
<!--            Harjutuste valik-->
<!--          </button>-->
<!--          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">-->
<!--            <li v-for="template in exerciseTemplates" :key="template.exerciseTempId" :value="template.exerciseTempId"><a class="dropdown-item" href="#"></a>{{ template.exerciseTempName }}</li>-->

<!--          </ul>-->
<!--        </div>-->

<div>
  <ImageInput @pictureInputSuccess="setPicture"/>
</div>

    <button v-on:click="addPicture" type="button" class="btn btn-primary">Salvesta pilt</button>


      <!--  todo: Kui  pictureData == null   -->
      <div v-if="pictureInfo.imgData === null">
        <img src="../images/default.jpg" class="myPicSize">
      </div>
      <div v-else>
        <img :src="pictureInfo.imgData" class="myPicSize">
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
        imgData: ''
      },

      pictureInfo: {
        exerciseTempId: 0,
        imgData: '',
      },

      pictureResponse: {
        exerciseTempId: 0,
        imgData: null,
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
      // ???
      this.$http.patch("/photo", this.pictureInfo
      ).then(response => {
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
