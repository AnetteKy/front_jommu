<template>
  <div>
    <div class="row justify-content-center m-3">
      <div class="input-group">
        <input placeholder="Kasutajanimi" type="text" class="form-control" aria-label="Sizing example input"
               aria-describedby="inputGroup-sizing-default">
      </div>
    </div>
    <div class="row justify-content-center m-3">
      <div class="input-group">
        <input placeholder="Parool" type="password" class="form-control" aria-label="Sizing example input"
               aria-describedby="inputGroup-sizing-default">
      </div>
    </div>
    <button class="btn btn-primary" type="submit">Logi sisse</button>
    <div class="row justify-content-center">
      <label class="mt-5">Ei oma veel kontot?</label>
      <button type="button" class="btn btn-secondary btn-sm">Registreeri</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TrainerLogin'
}
</script>