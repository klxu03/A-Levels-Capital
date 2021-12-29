<script setup>
    import logo from '../assets/logo-gray.svg';
</script>

<template>
  <div class="nav">
      <a href="home">    
          <img alt="ALC Logo" href="#" :src="logo" class="alc-logo" />
    </a>

    <div class="router">
        <a href="home">About Us</a>
        <a href="team">Team</a>
        <a href="portfolio">Portfolio</a>
        <a href="jobs">Jobs</a>
        <a href="blog">Blog</a>
    </div>

    <button class="join-us">Join Us</button>

  </div>
</template>

<style scoped>
    .nav {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 0;
        padding-top: 0;
        height: 100px;
        background: #26254E;
    }
    .alc-logo {
        justify-content: left;
        width: 20%;
        margin-left: 76px;
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

        width: 100px;
        height: 2em;
        margin-top: 1.25%;
        color: #FDFDFD;
    }

    .join-us {
        margin-left: 1.25%;
        justify-content: right;
        margin-right: 5%;

        background: #6688C8;
        border-radius: 10px;
        width: 119px;
        height: 49px;
        margin-top: -0.5%;

        font-family: IBM Plex Sans;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 23px;

        /* Almost White */

        color: #FDFDFD;
    }
    
</style>
