<template>
  <div class="d-grid gap-2 d-md-flex justify-content-md-end">
    <button v-on:click="logout" type="button" class="btn btn-outline-secondary btn-sm m-5">Logi välja</button>
  </div>
</template>
<script>
export default {
  name: 'Logout',
  props: {
    logout: {}
  }
}
</script>