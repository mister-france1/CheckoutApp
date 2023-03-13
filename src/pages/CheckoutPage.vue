<template>
  <div class="checkoutPage">
    <div class="main">
      <HeaderCheckout/>
      <CartReserved/>
      <ExpressCheckout/>
      <ContactInformation/>
      <ShippingAddress/>
      <ShippingMethod/>
      <PaymentMethod/>
      <BillingAddress/>
      <div class="completeOrderWrapper">
        <Button class="completeOrder" label="Complete Order" path="upsell" iconRight="arrow-right.svg" />
      </div>
    </div>
    <div class="sidebar">
      <TotalInfo />
      <Security class="checkoutSecurityWrapper"/>
      <ClubInfo />
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
import PaymentMethod from 'components/checkout/PaymentMethod.vue';
import BillingAddress from 'components/checkout/BillingAddress.vue';
import Button from 'components/general/Button.vue';
import TotalInfo from 'components/general/totalInfo/TotalInfo.vue';
import Security from 'components/general/Security.vue';
import ClubInfo from 'components/checkout/clubInfo/ClubInfo.vue';

</script>

<style scoped lang="scss">
.checkoutPage {
  display: flex;
  cursor: default;

  .main {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    flex: 1;
    margin-top: 60px;
    padding-right: 60px;

    .completeOrderWrapper {
      display: flex;
      justify-content: flex-start;
    }

    .completeOrder {
      margin-bottom: 256px;
    }

    > *:not(.completeOrder) {
      max-width: 540px;
      width: 100%;
    }
  }

  .sidebar {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 1;
    padding: 65px 0 0 60px;
    background-color: #EBECF3;

    > * {
      max-width: 450px;
      width: 100%;
    }

    .checkoutSecurityWrapper {
      margin-bottom: 15px;
    }
  }
}
</style>
