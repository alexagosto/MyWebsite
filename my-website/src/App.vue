<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue';
// Reactive state to track if the mobile menu is open
const isMobileMenuOpen = ref(false);
// Method to toggle the mobile menu state
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
const hideMobileMenu = () => {
  isMobileMenuOpen.value = false;
};
</script>

<template>
  <div id="app">
    <nav class ="navbar">
      <div class="logo-container">
        <a href="https://github.com/alexagosto" class="logo-link">
          <img src="../src/components/icons/github.png" alt="Github-logo" class="github-logo"/>
          <span class="tooltip-text">Check Out My Github!</span>
        </a>
        <a href="https://drive.google.com/drive/u/1/folders/15o6KttUqmFIo-jqZ0weBKwJHDJX4rW5m" class ="logo-link">
          <img src="../src/components/icons/art_holder.png" alt="Art-Logo" class="art-logo"/>
          <span class="tooltip-text">Check Out My Paintings!</span>
        </a>
      </div>
      <div class="name">
        <h1>Alex Y. Agosto Figueroa</h1>
      </div>
      <button class="mobile-nav-toggle" @click="toggleMobileMenu" aria-controls="primary-navigation" :aria-expanded="isMobileMenuOpen.toString()">
        <span class="sr-only"></span>
      </button>
      <ul :class="{'primary-navigation': true, 'active': isMobileMenuOpen}">
        <li><router-link to="/about" @click="hideMobileMenu">About</router-link></li>
        <li><router-link to="/resume" @click="hideMobileMenu">Resume</router-link></li>
        <li><router-link to="/contacts" @click="hideMobileMenu">Contacts</router-link></li>
      </ul>
    </nav>
    <RouterView />
  </div>
</template>


<style scoped>
.navbar{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #222222;
  color: #F5F0F6;
}

.name{
  font-size: 20px;
  margin-left: 100px;
  align-self: center;
  color: #E0E0E2;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 10px;
}

.github-logo{
  width: 40px;
  height: auto;
}

.art-logo{
  width: 50px;
  height: auto;
}

.logo-link {
  position: relative;
  display: inline-block;
}

.tooltip-text{
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;

  /*Tooltip pos*/
  position: absolute;
  z-index: 1;
  top: 100%;
  left: 50%;
  margin-left: -30px;

  /*Fade in*/
  opacity: 0;
  transition: opacity 0.5s;
}

.logo-link:hover .tooltip-text {
  visibility: visible;
  opacity: 1;
}

.primary-navigation{
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
}

.primary-navigation li a {
  color: #E0E0E2;
  text-decoration: none;
}

/*mobile nav style */
.mobile-nav-toggle{
  background: none;
  display: none;
  border: none;
  cursor: pointer;
}

.mobile-nav-toggle:before{
  content: '☰';
  color: #fff;
  font: 20px "Fira Sans", sans-serif;
}

@media (max-width: 768px) {
  .navbar{
    position: relative;
  }

  .name{
    margin-left: 1px;
    font: 12px "Fira Sans", sans-serif;
  }

  .github-logo{
    margin-top: 0;
    width: 20px;
    height: auto;
  }

  .art-logo{
    margin-top: 10px;
    width: 25px;
    height: auto;
  }

  .primary-navigation{
    display: none;
    flex-direction: column;
    width: 100%;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #333;
    z-index: 10;
  }

  .primary-navigation.active{
    display: flex;
  }

  .mobile-nav-toggle{
    display: block;
    background: none;
    border: none;
    color: #43aa8b;
  }

  .github-logo,
  .primary-navigation li a {
    display: block;
    text-align: center;
  }
}

#app {
  text-align: center;
  flex-grow: 1;
}

nav ul {
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: flex;
  justify-content: space-around;
}

nav ul li {
  margin: 0;
}

nav ul li a {
  text-decoration: none;
  color: #43aa8b;
  font: 1.5em "Fira Sans", sans-serif;
  padding: 5px;
  display: block;
}

nav ul li a.router-link-active{
  color: #8E94F2;
}
</style>
