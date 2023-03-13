<template>
  <div class="checkoutPage">
    <div class="main">
      <HeaderCheckout />
      <CartReserved />
      <ExpressCheckout />
      <ContactInformation />
      <ShippingAddress />
      <ShippingMethod />

      <q-btn label="Next" @click="$router.push('/upsell')" />
    </div>
    <div>

    </div>
  </div>
</template>

<script setup lang="ts">
import CartReserved from 'components/checkout/CartReserved.vue';
import HeaderCheckout from 'components/checkout/HeaderCheckout.vue';
import ExpressCheckout from 'components/checkout/expressCheckout/ExpressCheckout.vue';
import ContactInformation from 'components/checkout/ContactInformation.vue';
import ShippingAddress from 'components/checkout/ShippingAddress.vue';
import ShippingMethod from 'components/checkout/ShippingMethod.vue';

</script>

<style scoped lang="scss">
.checkoutPage {
  display: flex;
  cursor: default;

  .main {
    margin: 60px 0 0 405px;
  }
}
</style>
