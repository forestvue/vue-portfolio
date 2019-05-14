<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'Portfolio',
  created: function () {
    this.$eventHub.$emit('navigate', 0)
  }
}
</script>

<style scoped>

</style>
