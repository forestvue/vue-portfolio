<template>
  <div id="app">
    <side-nav />
    <router-view/>
  </div>
</template>

<script>
import SideNav from '@/components/SideNav.vue'
export default {
  name: 'App',
  components: {
    'side-nav': SideNav
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: row;
  height: 100%;
  background-color: antiquewhite;
}
</style>
