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

    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterView"
}
</script>

<style scoped>

</style>