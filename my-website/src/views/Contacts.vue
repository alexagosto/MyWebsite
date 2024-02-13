<script setup>
</script>

<template>
  <div class="contacts-container">
    <div class="backgroundcolor">
    <h1>My Links | Info</h1>
    <div class="contact-method">
      <img src="../../src/components/icons/email.webp" alt="Email Icon" class="icon">
      <a href="mailto:alex.agosto@upr.edu"><p>alex.agosto@upr.edu</p></a>
    </div>
    <div class="contact-method">
      <img src="../../src/components/icons/phone.webp" alt="Phone Icon" class="icon">
      <p>(+1) 787-600-1941</p>
    </div>
    <div class="contact-links">
      <a href="https://www.linkedin.com/in/alex-agosto/" target="_blank">
        <img src="../../src/components/icons/linkedin.webp" alt="LinkedIn" class="icon">LinkedIn
      </a>
      <a href="https://github.com/alexagosto" target="_blank">
        <img src="../../src/components/icons/github.png" alt="GitHub" class="icon">GitHub
      </a>
      <a href="https://open.spotify.com/user/12130932446?si=e2bdbfda79974163" target="_blank">
        <img src="../../src/components/icons/Spotify_icon.svg" alt="Spotify" class="icon">Spotify
      </a>
    </div>
    </div>
  </div>
</template>


<style scoped>
.contacts-container {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font: 30px "Fira Sans", sans-serif;
  color: #fff;
  justify-content: left;

}

.backgroundcolor{
  background-color: #222222;
  padding: 15px;
  padding-bottom: 25px;

}

.contact-method, .contact-links a {
  display: flex;
  align-items: center;
  color: #fff;
  margin: 10px 0;
}

.icon {
  width: 30px; /* Adjust size as needed */
  margin-right: 10px;
}

.contact-links a {
  text-decoration: none;
  color: #fff; /* Adjust color as needed */
  margin: 5px;
}

h1 {
  margin-bottom: 20px;
}

@media (min-width: 768px) {
  .contacts-container {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    font: 45px "Fira Sans", sans-serif;
    color: #fff;
    justify-content: left;
  }
}
</style>