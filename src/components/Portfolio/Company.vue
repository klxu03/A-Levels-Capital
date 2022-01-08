<script setup>
defineProps({
  filename: String,
  num: Number,
  quintuplet: Boolean,
});
</script>

<template>
  <div
    :class="{
      company: num % 5 && quintuplet,
      companyR: !(num % 5) && quintuplet,
      companyS: !quintuplet,
    }"
  >
    <img :src="`src/assets/companies/${filename}`" class="logo" />
    <p>{{ filename }}</p>
  </div>
</template>

<style scoped lang="scss">
$port: #26254e;
$danube: #6688c8;
$kimberly: #716c93;
$light: #fdfdfd;

.company {
  width: 200px;
  height: 200px;

  background: $light;
  border: 2px solid $port;
  margin-bottom: 75px;
  margin-right: 75px;
}

.companyR {
  width: 200px;
  height: 200px;

  background: $light;
  border: 2px solid $port;
  margin-bottom: 75px;
}

.companyS {
  width: 200px;
  height: 200px;

  background: $light;
  border: 2px solid $port;
  margin: 0 auto 75px;
}

.logo {
  width: 150px;
  height: 150px;
  margin: 23px;
}
</style>
