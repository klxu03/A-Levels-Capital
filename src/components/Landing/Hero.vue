<script setup></script>

<template>
  <div class="hero">
    <div class="border"></div>
    <h1>Student Led VC Fund at Hopkins</h1>
    <p>
      A-Level Capital, LLC is a student-led venture capital fund based in
      Baltimore, Maryland. Our firm invests in Johns Hopkins University student
      and young alumni founded companies. Please visit our website,
      alevelcapital.com to learn more and/or apply for start-up funding.
    </p>

    <button class="join-us">Join Us</button>
  </div>
</template>

<style scoped>
.hero {
  width: 100%;
  /* min-height: 33%; */
  height: 37.5em;
  /* min-height: 100%; */

  background-image: url("@/assets/hero.jpeg");
  background-size: 125%;
  background-repeat: no-repeat;
  background-position: 0% 100%;
  color: #fdfdfd;
}

.border {
  border: 1px solid #000000;
  /* border: 1px solid #6688C8; */
}

h1 {
  width: 422px;
  height: 36px;
  margin-left: 76px;
  margin-top: 5em;

  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 36px;
}

p {
  width: 460px;
  height: 115px;
  margin-left: 76px;
  margin-top: 1.5em;

  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;
}

.join-us {
  float: left;
  margin-left: 76px;
  margin-top: 1.5em;

  width: 286px;
  height: 73px;

  /* Kimberly */

  background: #716c93;
  border-radius: 19px;

  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 36px;
}
</style>
