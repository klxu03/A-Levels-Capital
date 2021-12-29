<script setup>
    defineProps({
        msg: String
    })
</script>

<template>
  <div class="spacer">
    <div class="border"></div>
    <h3>{{ msg }}</h3>
    <div class="border"></div>

  </div>
</template>

<style scoped>
    .spacer {
        margin-top: 62px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .border {
        width: 387px;
        background: #26254E;
        border: 1px solid #000000;
        transform: rotate(-180deg);
        margin-left: 1em;
        margin-right: 1em;
    }

    h3 {
        height: 26px;   

        font-family: IBM Plex Sans;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 26px;
        /* identical to box height */


        /* Port Gore */

        color: #26254E;
    }
    
</style>
