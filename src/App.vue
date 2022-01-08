<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";

import LandingPage from "./pages/Landing.vue";
import PortfolioPage from "./pages/Portfolio.vue";
</script>

<template>
  <NavBar />

  <router-view />
  <!-- <LandingPage /> -->
  <!-- <PortfolioPage /> -->

  <Footer />
</template>

<style lang="scss">
$port: #26254e;
$danube: #6688c8;
$kimberly: #716c93;
$light: #fdfdfd;
#app {
  font-family: IBM Plex Sans;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  margin-top: 0;

  width: 100%;
  height: 100%;
}
</style>
