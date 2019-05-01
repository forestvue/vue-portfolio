<template>
  <div>
    <Side/>
    <Menu/>
    <div class="site-main">
      <div class="site-main-inner">
        <router-view/>
      </div>
    </div>

  </div>
</template>

<script>
import Main from './common/Main.vue'
import Side from './common/Side.vue'
import Menu from './common/Menu.vue'
export default {
  name: 'App',
  components: {
    Main,
    Menu,
    Side
  }
}
</script>

<style src="./static/css/fontconfig.css"></style>
<style src="./static/css/main.css"></style>
