<script setup>
import { ref } from 'vue';

const paintings = ['../../src/components/art/1.png', '../../src/components/art/2.png', '../../src/components/art/3.png', '../../src/components/art/4.png', '../../src/components/art/5.png',
  '../../src/components/art/6.png', '../../src/components/art/7.png',];
const currentPainting = ref(paintings[0]);
let currentIndex = 0;

setInterval(() => {
  currentIndex = (currentIndex + 1) % paintings.length;
  currentPainting.value = paintings[currentIndex];
}, 5000); // Change image every 3000 milliseconds (3 seconds)
</script>

<template>
  <div class="contacts-container">

    <div class="quadrant contact">
      <h1>My Links</h1>
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
          <img src="../../src/components/icons/linkedin.webp" alt="LinkedIn" class="icon">Alex Y Agosto Figueroa
        </a>
        <a href="https://github.com/alexagosto" target="_blank">
          <img src="../../src/components/icons/github.png" alt="GitHub" class="icon">alexagosto
        </a>
        <a href="https://open.spotify.com/user/12130932446?si=e2bdbfda79974163" target="_blank">
          <img src="../../src/components/icons/Spotify_icon.svg" alt="Spotify" class="icon">Spotify
        </a>
        </div>
    </div>

    <div class="quadrant reading">
      <h1>Upcoming Projects:</h1>
        <ul>
          <li>Updating this website as I learn.</li>
          <li>Short Rust projects for practice!</li>
          <li>Smallscale gamedev project.</li>
          <li>Swarm Simulation (backburner)</li>
          <li>Recipe recommender update</li>
        </ul>
    </div>

    <div class="quadrant painting">
      <h1>Painting Showcase</h1>
      <div class="painting-showcase-image">
        <img :src="currentPainting" alt="Painting Showcase" class="painting-img"/>
      </div>
    </div>

    <div class="quadrant songs">
      <h1>Top Songs</h1>
      <ul>
        <li>Sweater Weather - The Neighbourhood</li>
        <li>Sunday Best - Surfaces</li>
        <li>You - Regard</li>
        <li>An Insatiable High - Masayoshi Takanaka</li>
        <li>Stay With Me  - Miki Matsubara</li>
      </ul>
    </div>

  </div>
</template>


<style scoped>
.contacts-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 20px;
  padding: 20px;
  font: 20px "Fira Sans", sans-serif;
  color: #fff;
}

.quadrant{
  background-color: #222222;
  padding: 15px;
  opacity: 100%;
  width: 100%;
  height: 650px;
  border-radius: 15px;
}

.painting-img{
  width: 100%;
  height: auto;
  object-fit: contain;
  display: block;
  margin: 0 auto;
  padding: 20px;
}

.contact-method, .contact-links a {
  display: flex;
  align-items: center;
  color: #fff;
  margin: 10px 0;
  padding-top: 56px;
  font: 25px "Fira Sans", sans-serif;
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

.reading ul, .songs ul{
  font: 28px "Fira Sans", sans-serif;
  padding: 25px;
  text-align: left;
}


.reading ul li, .songs ul li {
  margin-top: 15px;
  margin-bottom: 25px; /* Adjust the space as needed */
}

h1 {
  margin-bottom: 20px;
}

@media (max-width: 768px) {
  .contacts-container {
    grid-template-columns: 1fr; /* Stack quadrants on top of each other */
    font: 15px "Fira Sans", sans-serif;
  }

  .quadrant{
    height: 550px;
  }

  .contact-method, .contact-links a {
    display: flex;
    align-items: center;
    color: #fff;
    margin: 10px 0;
    padding-top: 46px;
    font: 22px "Fira Sans", sans-serif;
  }

  .reading ul{
    font-size: 25px;
    padding: 25px;

  }

  .songs ul{

  }

  .reading ul li, .songs ul li {
    margin-top: 15px;
    margin-bottom: 25px; /* Adjust the space as needed */
  }
}
</style>