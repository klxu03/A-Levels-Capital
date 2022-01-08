<script setup>
import alc from "@/assets/ALC-color-horizontal.svg";
</script>

<template>
  <img alt="Carousel Right Button" :src="alc" />
  <div class="big-text">
    <h3>A-Level Capital</h3>
    <h2>Portfolio</h2>
  </div>

  <div class="small-text">
    <p>
      We love investing in companeis that are building the future we want to
      live in. If your startup has at least one JHU student or young alumnus on
      the founding team, we'd love to hear more about what you're doing!
    </p>
    <div class="apply-container">
      <p>
        We are still looking for startups to fund in the 2021 - 2022 academic
        year
      </p>
      <button class="apply">Apply</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
$port: #26254e;
$danube: #6688c8;
$kimberly: #716c93;
$light: #fdfdfd;

img {
  margin: 3.75em auto 3.75em;
  width: 25.1875em;
  height: 4.0625em;
}

.big-text {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 auto;
  width: 49.0625em;
}

.big-text h3 {
  width: 29.6875em;

  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 3.125em;
  line-height: 1em;
  /* identical to box height */

  letter-spacing: 0.05em;
  text-transform: uppercase;

  color: $port;
}

.big-text h2 {
  width: 19.375em;
  margin-left: 1.375px;

  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 3.125em;
  line-height: 1em;
  /* identical to box height */

  letter-spacing: 0.05em;
  text-transform: uppercase;

  color: $danube;
}

.small-text {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 auto;
  width: 81.25em;

  margin-top: 60px;
  margin-bottom: 43px;
}

.small-text p {
  width: 34.375em;

  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 31px;
  text-align: left;

  color: $port;
}

.apply-container {
  margin-left: 200px;
  width: 34.375em;
}

.apply-container p {
  width: 550px;
  height: 60px;

  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 31px;
  letter-spacing: 0.06em;
  text-transform: uppercase;

  color: $port;
}

.apply {
  margin-top: 24px;
  /* Button styling */
  width: 275px;
  height: 72px;
  background: $port;

  /* Text styling */
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 31px;
  text-transform: uppercase;
  color: $light;
}
</style>
