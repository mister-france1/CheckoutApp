<template>
  <div class="shippingMethods">
    <div class="title">
      Shipping method
    </div>
    <RadioGroup v-model="shippingMethod" :options="options"/>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useCheckoutStore } from 'stores/checkout-store';
import RadioGroup from 'components/general/RadioGroup.vue';

const checkout = useCheckoutStore();

interface ShippingOption {
  label: string;
  price: string;
  val: number;
  color?: string;
}

const shippingMethod = computed({
  get() {
    return checkout.shippingMethod;
  },
  set(value) {
    checkout.shippingMethod = value;
  }
});

const options: ShippingOption[] = [
  { label: 'Free shipping', price: '$10', val: 10 },
  { label: 'DHL with price', price: '$20', val: 20, color: '#4B4E68' }
];
</script>

<style lang="scss">
@import './src/css/mixins';
@import 'src/css/variables';

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

@media screen and (max-width: $wideTablet) {
  .shippingMethods {
    margin-bottom: 40px;
  }
}

@media screen and (max-width: $mobile) {
  .shippingMethods {
    margin-bottom: 30px;

    .title {
      font-size: 20px;
      line-height: 30px;
    }
  }
}
</style>
