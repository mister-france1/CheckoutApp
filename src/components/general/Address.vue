<template>
  <div class="address">
    <div class="countryWrapper">
      <Select v-model="country" :options="CountryList" label="Country" type="text" icon="country.svg" />
    </div>
    <div class="row-wrapper">
      <div class="col">
        <Input v-model="firstName" label="First Name" type="text" icon="name.svg" />
      </div>
      <div class="col">
        <Input v-model="lastName" label="Last Name" type="text" icon="name.svg" />
      </div>
    </div>
    <div class="addressWrapper">
      <Input v-model="address" label="Address" type="text" icon="address.svg" />
    </div>
    <div class="row-wrapper">
      <div class="col">
        <Input v-model="city" label="City" type="text" />
      </div>
      <div class="col">
        <Input v-model="postalCode" label="Postal Code" type="text" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Input from './Input.vue';
import Select from './Select.vue';
import CountryList from 'src/constants/countryList';

import { ref } from 'vue';

const country = ref('');
const firstName = ref('');
const lastName = ref('');
const address = ref('');
const city = ref('');
const postalCode = ref('');
</script>

<style scoped lang="scss">
.address {
  .countryWrapper {
    margin-bottom: 30px;
  }

  .addressWrapper {
    margin-bottom: 20px;
  }

  .row-wrapper:not(:last-child) {
    margin-bottom: 20px;
  }

  .row-wrapper {
    display: flex;

    .col {
      &:first-child {
        margin-right: 8px;
      }

      &:last-child {
        margin-left: 8px;
      }
    }
  }
}
</style>
