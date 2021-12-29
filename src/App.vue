<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import NavBar from './components/NavBar.vue'
import Hero from './components/Hero.vue'
import VerticalSpacer from './components/VerticalSpacer.vue'
import ThreePaneDescription from './components/ThreePaneDescription.vue'
import Carousel from './components/Carousel.vue'
import Footer from './components/Footer.vue'

</script>

<template>  
  <NavBar />
  <Hero />
  <VerticalSpacer msg="What We Do" />
  <ThreePaneDescription />
  <VerticalSpacer msg="Testimonials " />
  <Carousel />
  <Footer />

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
  height: 100%;
}
</style>
