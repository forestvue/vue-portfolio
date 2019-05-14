<template>
  <aside class="site-sidebar">
    <div class="site-sidebar-inner">
      <router-link to="/" class="person">
        <div class="person-avatar">
          <img src="../static/images/my_pic.jpg" alt="" class="avatar">
        </div>
        <div class="person-content">
          <h1 class="person-title">Seungeon Choi</h1>
          <h2 class="person-subtitle">Full-stack Web developer</h2>
        </div>
      </router-link>
      <nav class="block main-navigation" v-bind:class="{extended: expanded}">
        <div class="navigation-extend-bar">
          <div class="social-icons">
            <a href="mailto:chou610@gmail.com" class="button button-icon" title="mail: chou610@gmail.com">
              <i class="fa fa-envelope"></i>
            </a>
            <a href="https://github.com/loyalchoi610" class="button button-icon" title="github: loyalchoi610">
              <i class="fa fa-github-square"></i>
            </a>
          </div>

          <a href="#" v-on:click="dropdown($event)" class="navigation-extend-button js-extend-main-navigation">
            <i class="fa fa-bars"></i>
          </a>
        </div>
        <div class="navigation-extendable">
          <ul>
            <li  :class="active[0] ? 'current': ''"><router-link to="/portfolio">Portfolio</router-link></li>
           <li  :class="active[1] ? 'current': ''"><router-link to="/skills">Skills</router-link></li>
          <li  :class="active[2] ? 'current': ''"><router-link to="/contact">Contact me</router-link></li>
          </ul>
          <ul>
            <li  :class="active[3] ? 'current': ''"><router-link to="/cv">My CV</router-link></li>
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
  created: function () {
    this.$eventHub.$on('navigate', this.point)
  },
  data: function () {
    return {
      active: [false, false, false, false],
      counter: 0,
      expanded: false
    }
  },
  methods: {
    point: function (loc) {
      for (let i = 0; i < 4; i++) this.$set(this.active, i, false)
      if (loc !== 'undefined') {
        this.$set(this.active, loc, !this.active[loc])
      }
      this.expanded = !this.expanded
    },
    dropdown: function (event) {
      event.preventDefault()
      this.expanded = !this.expanded
    }
  }
}
</script>

<style scoped>

</style>
