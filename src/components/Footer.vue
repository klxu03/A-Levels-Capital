<script setup>
  import mail from '../assets/mail.svg';
</script>

<template>
  <div class="footer">
    <div class="content">
        <div class="mail-body">
            <a href="mailto:info@alevelcapital.com">
                <img alt="Mail Button" :src="mail" class="mail" />
            </a>
            <p>info@alevelcapital.com</p>
        </div>
        <p>A-Level Capital, Student-Led Venture Capital Firm</p>
    </div>
  </div>
</template>

<style scoped>
    .footer {
        height: 100px;
        width: 100%;
        background: #26254E;
        color: #FDFDFD;

    }

    .content {
        padding-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .mail-body {
        margin: auto;
         display: flex;
    flex-direction: row;
    align-items: center;
    }

    .mail {
        height: 35px;
        width: 35px;
        border-radius: 50%;

        /* Danube */

        background: #6688C8;
    }

    p {
        margin-left: 10px;
        height: 26px;

        font-family: IBM Plex Sans;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 26px;
    }
    
</style>
