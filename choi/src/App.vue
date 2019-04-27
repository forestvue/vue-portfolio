<template>
  <div>
    <Side/>
    <Menu/>
    <router-view/>
  </div>
</template>

<script>
import Main from './components/Main.vue'
import Side from './components/Side.vue'
import Menu from './components/Menu.vue'
export default {
  name: 'App',
  components: {
    Main,
    Menu,
    Side
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
