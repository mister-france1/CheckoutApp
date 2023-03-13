<template>
  <div class="shippingMethods">
    <div class="title">
      Shipping method
    </div>
    <RadioGroup v-model="shippingMethod" :options="options"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import RadioGroup from 'components/general/RadioGroup.vue';

const shippingMethod = ref(null);

const options = [
  { label: 'Free shipping', price: '$10', val: '10',  },
  { label: 'DHL with price', price: '$20', val: '20', color: '#4B4E68' }
];
</script>

<style lang="scss">
@import './src/css/mixins';

.shippingMethods {
  margin-bottom: 50px;

  .title {
    @include text();
    font-weight: 500;
    font-size: 24px;
    line-height: 34px;
    color: #000034;
    margin-bottom: 20px;
  }
}
</style>
