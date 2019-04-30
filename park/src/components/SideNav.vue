<template>
  <div class="side-nav-container">
    <div class="side-nav-inner">
      <router-link to="/">
        <div class="profile">
          <img src="../assets/logo.png" alt>
          <h1>{{ name }}</h1>
          <h2>{{ job }}</h2>
        </div>
      </router-link>
      <div class="navigation-list">
        <ul>
          <li>
            <router-link to="/portfolio">portfolio</router-link>
          </li>
          <li>
            <router-link to="/skills-offer">skills & offer</router-link>
          </li>
          <li>
            <router-link to="/contact-me">contact me</router-link>
          </li>
        </ul>
        <ul>
          <li>
            <router-link to="/portfolio">my cv</router-link>
          </li>
          <li>
            <router-link to="/portfolio">my talks</router-link>
          </li>
          <li>
            <router-link to="/portfolio">personal blog</router-link>
          </li>
        </ul>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Park Beom Min",
      job: "Developer"
    };
  }
};
</script>

<style scoped>
.side-nav-container {
  width: 25%;
  height: 100%;
  background: #eee;
  font-size: 14px;
  color: #fff;
  text-align: left;
  background-color: rgba(145, 13, 13, 0.8);
}

.side-nav-inner {
  position: relative;
  height: 100%;
  overflow-y: auto;
  padding: 45px 40px;
}

.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile img {
  width: 152px;
  height: 152px;
  border-radius: 50%;
  margin-bottom: 10px;
}

.profile h1 {
  font-size: 22px;
  font-weight: 500;
  text-transform: uppercase;
}

.profile h2 {
  font-size: 16px;
  font-weight: 300;
  text-transform: uppercase;
}

.navigation-list {
  margin: 45px 0px;
  line-height: 30px;
  position: relative;
  font-size: 14px;
  text-transform: uppercase;
}

.navigation-list a {
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  display: block;
}

.navigation-list ul + ul {
  margin-top: 30px;
}
</style>
