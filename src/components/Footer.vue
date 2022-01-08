<script setup>
import mail from "../assets/mail.svg";
</script>

<template>
  <div class="footer">
    <div class="content">
      <div class="mail-body">
        <a href="mailto:info@alevelcapital.com">
          <img
            alt="Mail Button"
            style="width: 2.1875em"
            :src="mail"
            class="mail"
          />
        </a>
        <p>info@alevelcapital.com</p>
      </div>
      <p>A-Level Capital, Student-Led Venture Capital Firm</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
$port: #26254e;
$danube: #6688c8;
$kimberly: #716c93;
$light: #fdfdfd;

.footer {
  height: 6.25em;
  width: 100%;
  background: $port;
  color: $light;
}

.content {
  padding-top: 1.25em;
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

p {
  margin-left: 0.4375em;

  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: 600;

  font-size: 1.25em;
  line-height: 1.625em;
}
</style>
