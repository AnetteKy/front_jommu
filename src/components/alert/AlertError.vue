<template>
  <div v-if="errorResponse.message.length > 0" class="alert alert-danger" role="alert">
    {{ errorResponse.message }}
  </div>
</template>
<script>
export default {
  name: 'AlertError',
  props: {
    errorResponse: {}
  }
}
</script>