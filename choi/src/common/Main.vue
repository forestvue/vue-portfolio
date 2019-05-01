<template>
  <div class="home-section">
    <div class="home-section-inner">
      <div class="home-heading">
        Hi, I'm Seungeon Choi
      </div>

      <h2 class="home-subheading">
        web service developer specialized&nbsp;in<br>
        <strong>front-end and back-end web development</strong>.
      </h2>

      <div class="home-buttons">
        <router-link to="/portfolio"  class="button button-outline button-white">Portfolio</router-link>
        <br>
        <router-link to="/skills" class="button button-outline button-white">Skills &amp; offer</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  beforeCreate () {
    document.body.className = 'parent-home'
  },
  destroyed () {
    document.body.className = ''
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
