<template>
  <div class="shippingInfo">
    <div class="row-wrapper">
      <Info title="Name:" :value="name" />
      <Info title="Email:" :value="email" />
    </div>
    <div class="row-wrapper">
      <Info title="Shipping Address:" :value="address" />
      <Info title="Billing Address:" value="Same as shipping" />
    </div>
    <div class="row-wrapper">
      <Info title="Shipping:" value="Free" />
      <Info title="Payment Method:" value="Credit Card" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import Info from 'components/thankyou/shippingInfo/Info.vue';

import { useCheckoutStore } from 'stores/checkout-store';
const checkout = useCheckoutStore();

const name = computed<string>(() => {
  const { firstName, lastName } = checkout.shippingAddress;
  return firstName && lastName ? `${firstName} ${lastName}` : 'Oleo Bone';
});

const email = computed<string>(() => {
  return `${checkout.email}` || 'oleo_bone@gmail.com';
});

const address = computed<string>(() => {
  return `${checkout.shippingAddress.address}` || '4140 Parker Rd. Allentown, New Mexico 31134';
});
</script>

<style scoped lang="scss">
@import 'src/css/variables';
.shippingInfo {
  display: flex;
  flex-direction: column;
  padding: 40px;

  box-sizing: border-box;
  background: #FFFFFF;
  border: 1px solid #D6D8EE;
  border-radius: 32px;

  .row-wrapper {
    display: flex;
    justify-content: space-between;
    margin-bottom: 18px;

    &:last-child {
      margin-bottom: unset;
    }
  }
}

@media screen and (max-width: $mobile) {
  .shippingInfo {
    padding: 30px 16px 14px;

    .row-wrapper {
      flex-direction: column;
      margin-bottom: unset;

      > * {
        margin-bottom: 16px;
      }
    }
  }
}
</style>
