<script setup>
</script>

<template>
  <div class="about-container">
    <div class="about-profile">
      <img src="../../src/components/icons/me1.png" alt="Alex Y. Agosto Figueroa" class="profile-picture">
    </div>
    <div class="about-content">
      <div class="text-background">
      <h1>About Me</h1>
      <p>I'm Alex Agosto, a Puerto Rican software engineering student expecting to graduate in December 2024.
        I'm actively looking for internship and full time opportunities to further my
        skills and learn how to apply abilities learnt in projects and jobs to new workforce areas.
        I hold a passion in backend and game development; and have tried my hand in machine learning and frontend recently,
        leading to new interests.</p>
      <p2>Some of my other hobbies include playing instruments, learning languages (currently learning german), and painting.
        I've provided a link to my most recent paintings as an icon to the right of my github profile in the navigation bar; feel free to check it out!</p2>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1{
  font: 35px "Fira Sans", sans-serif;
  margin-bottom: 8px;
}

.about-container{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 15px;
}

.about-profile, .about-content{
  width: 100%;
}

.about-content p {
  margin-bottom: 25px; /* Adds space below each paragraph */
  justify-content: left;
}

.about-content{
  text-align: justify;
  font: 15px "Fira Sans", sans-serif;
}

.profile-picture{
  max-width: 80%;
  height: auto;
}

.text-background{
  background-color:#222222;
  padding: 15px;
  padding-bottom: 25px;
}

@media (min-width: 768px) {
  .about-container{
    flex-direction: row;
    text-align: justify;
    align-items: flex-start;

    padding: 35px;

  }

  .about-profile{
    flex-basis: 50%;
    max-width: 50%;
    margin-left: 20px;
    padding-right: 40px;
  }

  .profile-picture{
    max-width: 100%;
    transform: scale(1.5);
    transform-origin: top;
    padding-top: 20px;
    margin-left: 200px;
  }

  .about-content{
    flex-basis: 50%;
    max-width: 50%;
    padding-left: 0;
    padding-right: 100px;
    margin-left: auto;
    padding-top: 150px;
    flex-wrap: wrap; /* Allows items to wrap */
    align-items: flex-start; /* Align items at the start */
    font: 25px "Fira Sans", sans-serif;
  }
}

</style>