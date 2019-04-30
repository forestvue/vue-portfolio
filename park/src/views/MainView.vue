<template>
  <div class="main-container">
    <div class="main-info">
      <h1>Hi, I'm Park</h1>
      <h2>
        a freelance web developer specialized&nbsp;in
        <br>
        <strong>front-end and back-end web development</strong>.
      </h2>
    </div>
    <div class="main-buttons">
      <router-link to="/portfolio">PORTFOLIO</router-link>
      <router-link to="/skills-offer">SKILLS&OFFER</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main-container {
  margin: auto;
  color: #fff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);
  font-size: 12px;
}

.main-info h1 {
  font-size: 4em;
  font-weight: 500;
}

.main-info h2 {
  font-size: 3em;
  font-weight: 300;
  text-transform: none;
}

.main-buttons {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 2em;
}

.main-buttons a {
  text-transform: uppercase;
  font-weight: 300;
  text-decoration: none;
  opacity: 0.8;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.47);
  margin-bottom: 1em;
  border-width: 1px;
  border-style: solid;
  color: #fff;
  display: inline-block;
  padding: 0.4em 0.8em;
  line-height: 1;
  margin-right: 1em;
}
</style>
