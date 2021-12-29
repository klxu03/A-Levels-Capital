<script setup>
  import Margaret from '../assets/Margaret.png';
  import Rob from '../assets/Rob.png';
  import chevronLeft from '../assets/chevron-left.svg';
  import chevronRight from '../assets/chevron-right.svg';

</script>

<template>
  <div class="carousel">
    <a href="left" class="bg" >
      <img alt="Carousel Left Button" :src="chevronLeft" class="justify-center arrow" />
    </a>
    <img alt="Carousel Portrait" :src="Margaret" class="portrait" />
    <div class="text">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam sit id ultrices. Eget sit tincidunt ornare sed ligula. Morbi porta aliquet amet dui. Aenean massa est integer eget nam. Aliquam commodo augue nunc ac nulla in nec. Quam cursus tellus pellentesque dignissim. Placerat nunc, libero amet sed blandit sed. Libero mi commodo, dignissim augue fusce penatibus cum semper. Rhoncus eros vitae viverra mauris. Magna sem diam etiam urna mattis pharetra ipsum montes. Metus volutpat.</p>
        <h2>-- Margaret Roth, CMO of Yet Analytics</h2>
    </div>
    <a href="right" class="bg" >
      <img alt="Carousel Right Button" :src="chevronRight" class="justify-center arrow" />
    </a>
  </div>
</template>

<style scoped>
  .carousel {
      width: 1200px; 
      height: 262px;
      margin: 62px auto;

    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .bg {
    margin-left: 40px;
    margin-right: 40px;
  }

  .arrow {
    width: 3.5em;
    height: 3.5em;

    background: #F1F1F1;

    /* margin-left: 40px; */
    /* margin-right: 40px; */
    padding: 0.7em;
  }
  
  .portrait {
      width: 239px;
      height: 262px;
  }

  .text {
      display: flex;
      flex-direction: column;
  }

  p {
      width: 667px;
      height: 207px;
      
      margin-left: 60px;
      font-family: IBM Plex Sans;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 26px;


        color: #26254E;
  }

  h2 {
      height: 41px;
      margin-left: auto;
     font-family: IBM Plex Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 27px;
        line-height: 35px;
        text-align: right;

        /* Port Gore */

        color: #26254E; 
  }

</style>
