<template>
  <div class="checkoutPage">
    <q-form class="main" ref="checkoutForm" greedy>
      <HeaderCheckout/>
      <CartReserved/>
      <ExpressCheckout/>
      <ContactInformation/>
      <ShippingAddress/>
      <ShippingMethod/>
      <PaymentMethod/>
      <BillingAddress/>
      <div class="completeOrderWrapper">
        <Button class="completeOrder" label="Complete Order" iconRight="arrow-right.svg" @on-click="onValidate" />
      </div>
    </q-form>
    <div class="sidebar">
      <TotalInfo />
      <Security class="checkoutSecurityWrapper"/>
      <ClubInfo />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue';
import { Router, useRouter } from 'vue-router';
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

interface CheckoutForm {
  validate: () => Promise<boolean>;
}

const router: Router = useRouter();
const checkoutForm: Ref<CheckoutForm | null> = ref(null);

const onValidate = (): void => {
  if (checkoutForm.value) {
    checkoutForm.value.validate().then((success: boolean) => {
      if (success) {
        router.push('upsell');
      }
    });
  }
};

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
