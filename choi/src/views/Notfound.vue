<template>
  <div class="main-section">
    <h1 class="main-title">404 not found</h1>
  </div>
</template>

<script>
export default {
  name: 'Notfound',
  created: function () {
    this.$eventHub.$emit('navigate')
  }
}
</script>

<style scoped>

</style>
