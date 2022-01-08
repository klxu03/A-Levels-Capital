<script setup>
import { ref } from "vue";
import logo from "../assets/logo-gray.svg";

const active = ref("home");
const changeActive = (new_value) => {
  active.value = new_value;
};
</script>

<template>
  <div class="nav">
    <router-link to="/" @click="changeActive('home')">
      <img alt="ALC Logo" href="#" :src="logo" class="alc-logo" />
    </router-link>

    <div class="router">
      <router-link
        to="/"
        @click="changeActive('home')"
        :class="{ active: active == 'home' }"
        >About Us</router-link
      >
      <a href="team">Team</a>

      <router-link
        to="/portfolio"
        @click="changeActive('portfolio')"
        :class="{ active: active == 'portfolio' }"
        >Portfolio</router-link
      >
      <a href="jobs">Jobs</a>
      <a href="blog">Blog</a>
    </div>

    <button class="join-us">Join Us</button>
  </div>
</template>

<style scoped lang="scss">
$port: #26254e;
$danube: #6688c8;
$kimberly: #716c93;
$light: #fdfdfd;

.nav {
  font-family: IBM Plex Sans;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 6.25em;
  background: $port;
}

.alc-logo {
  justify-content: left;
  width: 15%;
  margin-left: 4.75em;
  margin-top: 2%;
}

.router {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  margin-left: auto;
}

.router a {
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;

  width: 6.25em;
  height: 2em;
  margin-top: 1.25%;
  color: $light;
}

.router .active {
  color: $danube;
}

.join-us {
  margin-right: 4.75em;

  margin-left: 1.25%;
  justify-content: right;

  background: $danube;
  border-radius: 10px;
  width: 7.5em;
  height: 2.5em;
  margin-top: -0.25%;

  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 23px;

  color: $light;
}
</style>
