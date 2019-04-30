<template>
  <div class="contact-me-container">
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
    <div class="contact-me-method">
      <div>E-mail:</div>
      <a :href="'mailto:'+email">
        <div>
          <i class="icon fa fa-envelope"></i>
          {{ email }}
        </div>
      </a>
      <div>Github:</div>
      <a :href="'http://github.com/'+github">
      <div><i class="icon fa fa-github"></i>{{ github }}</div>
      </a>
      <div>Facebook:</div>
      <a :href="'https://facebook.com/'+facebook"> 
      <div><i class="icon fa fa-facebook"></i>{{ facebook }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Contact Me",
      description:
        "I am available for hire and open to any ideas of cooperation.",
      email: "club20608@gmail.com",
      github: "ParkBeomMin",
      facebook: "ParkBeomMin"
    };
  }
};
</script>

<style scoped>
.contact-me-container {
  padding: 50px;
  color: #333;
}

.contact-me-container h1 {
  line-height: 1;
  margin-bottom: 15px;
  color: #555;
}

.contact-me-method {
  display: grid;
  grid-template-columns: 50% 50%;
}
</style>
