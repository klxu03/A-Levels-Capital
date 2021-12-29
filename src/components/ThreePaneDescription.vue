<script setup>
  import capital from '../assets/capital.png';
  import education from '../assets/education.png';
  import network from '../assets/network.png';

</script>

<template>
  <div class="panes">
      <div class="pane">
          <img alt="Capital Picture" :src="capital" class="pane-pic" />
          <h3>Capital</h3>
          <p>We provide seed funding for startups founded by JHU students and young alumni. </p>
      </div>
      <div class="pane">
          <img alt="Education Picture" :src="education" class="pane-pic" />
          <h3>Education & Support</h3>
          <p>We pair our financial contribution with an extensive resource library including our internship program.</p>
      </div>
      <div class="pane">
          <img alt="Network Picture" :src="network" class="pane-pic" />
          <h3>Network</h3>
          <p>We leverage our networks to best support each of our portfolio companies. </p>
      </div>
  </div>
</template>

<style scoped>
  .panes {
      width: 100%;
      margin: 62px auto;
      /* padding: auto; */

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
  }

  .pane {
    width: 370px;
    margin: 0 3%;
  }

  .pane-pic {
    width: 370px;
    height: 230px;
  }

  .pane h3 {
    width: 365px;
    height: 24px;

    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 109%;
    /* identical to box height, or 24px */

    text-align: center;
    letter-spacing: 0.045em;
    text-transform: uppercase;

    /* Port Gore */

    color: #26254E;


    /* Inside Auto Layout */

    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 15px 0px;
  }

  .pane p {
    position: static;
    width: 365px;
    height: 78px;
    left: 0px;
    top: 39px;

    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 26px;
    text-align: center;

    /* Port Gore */

    color: #26254E;


    /* Inside Auto Layout */

    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 15px 0px;
  }
    
</style>
