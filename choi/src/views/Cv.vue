<template>
  <div class="main-section">
    <h1 class="main-title">Coming soon</h1>
  </div>
</template>

<script>
export default {
  name: 'Cv',
  created: function () {
    this.$eventHub.$emit('navigate', 3)
  }
}
</script>

<style scoped>

</style>
