<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Hero from "@/components/Landing/Hero.vue";
import VerticalSpacer from "@/components/VerticalSpacer.vue";
import ThreePaneDescription from "@/components/Landing/ThreePaneDescription.vue";
import Carousel from "@/components/Landing/Carousel.vue";
</script>

<template>
  <Hero />
  <VerticalSpacer msg="What We Do" />
  <ThreePaneDescription />
  <VerticalSpacer msg="Testimonials " />
  <Carousel />
</template>

<style lang="scss"></style>
