<script setup>
import Company from "@/components/Portfolio/Company.vue";

import list from "@/assets/companies/list.json";
let list_size = list.length;
console.log(list[0].img);
let company_list = [];
for (let i = 0; i < 5; i++) {
  company_list = company_list.concat(list);
}
list_size *= 5;

for (let i = 0; i < 10; i++) {
  console.log(company_list[i]);
}
</script>

<template>
  <div class="companies">
    <Company
      v-for="(company, index) in company_list"
      :filename="company.img"
      :num="index + 1"
      :quintuplet="index <= list_size - (list_size % 5)"
      :key="index"
    />
  </div>
</template>

<style lang="scss">
.companies {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  width: 1300px;
  margin: auto;
}
</style>
