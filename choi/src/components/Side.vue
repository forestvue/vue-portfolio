<template>
  <aside class="site-sidebar">
    <div class="site-sidebar-inner">
      <a href="/" class="person">
        <div class="person-avatar">
          <img src="https://avatars1.githubusercontent.com/u/18233236?s=460&amp;v=4" alt="" class="avatar">
        </div>
        <div class="person-content">
          <h1 class="person-title">Seungeon Choi</h1>
          <h2 class="person-subtitle">Full-stack Web developer</h2>
        </div>
      </a>
      <nav class="block main-navigation">
        <div class="navigation-extendable">
          <ul>
            <li v-on:click="point(0)" :class="active[0] ? 'current': ''"><router-link to="/portfolio">Portfolio</router-link></li>
           <li v-on:click="point(1)" :class="active[1] ? 'current': ''"><router-link to="/skills">Skills &amp; offer</router-link></li>
          <li v-on:click="point(2)" :class="active[2] ? 'current': ''"><router-link to="/contact">Contact me</router-link></li>
          </ul>
          <ul>
            <li v-on:click="point(3)" :class="active[3] ? 'current': ''"><router-link to="/cv">My CV</router-link></li>
          </ul>
        </div>
      </nav>
      <div class="block block-social">
        <div class="block-title">Get in touch</div>
        <div class="block-content">
          <div class="social-icons">
            <a href="mailto:chou610@gmail.com" class="button button-icon" title="mail: chou610@gmail.com">
              <i class="fa fa-envelope"></i>
            </a>
            <a href="https://github.com/loyalchoi610" class="button button-icon" title="github: loyalchoi610">
              <i class="fa fa-github-square"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'SideComponent',
  data: function () {
    return {
      active: [false, false, false, false],
      counter: 0
    }
  },
  methods: {
    point: function (loc) {
      for (let i = 0; i < 4; i++) this.$set(this.active, i, false)
      this.$set(this.active, loc, !this.active[loc])
    }
  }
}
</script>

<style scoped>

</style>
