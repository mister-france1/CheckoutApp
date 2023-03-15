<template>
  <div class="checkoutPage">
    <q-form class="main" ref="checkoutForm" greedy>
      <HeaderCheckout/>
      <OrderSummary/>
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
      <Security class="checkoutSecurityWrapperMobile"/>
    </q-form>
    <div class="sidebar">
      <TotalInfo />
      <Security class="securityWrapper"/>
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
import OrderSummary from 'components/general/OrderSummary.vue';

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
@import 'src/css/variables';
.checkoutPage {
  display: flex;
  cursor: default;

  .main {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    flex: 1;
    margin-top: 60px;
    padding: 0 60px 0 40px;

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

    .checkoutSecurityWrapperMobile {
      display: none;
    }
  }

  .sidebar {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 1;
    padding: 65px 40px 0 60px;
    background-color: #EBECF3;

    > * {
      max-width: 450px;
      width: 100%;
    }

    .securityWrapper {
      margin-bottom: 15px;
    }
  }
}

@media screen and (max-width: $smallDesktop) {
  .checkoutPage {
    .main {
      padding: 0 40px;
    }

    .sidebar {
      padding: 65px 40px 0 40px;
    }
  }
}

@media screen and (max-width: $wideTablet) {
  .checkoutPage {
    .main {
      align-items: center;

      .completeOrderWrapper {
        .completeOrder {
          max-width: 540px;
          width: 100%;
          margin-bottom: 40px;
        }
      }

      .checkoutSecurityWrapperMobile {
        display: block;
        margin-bottom: 167px;
      }
    }

    .sidebar {
      display: none;
    }
  }
}

@media screen and (max-width: $mobile) {
  .checkoutPage {
    padding: 0 16px;

    .main {
      padding: 0;

      .completeOrderWrapper {
        .completeOrder {
          margin-bottom: 30px;
        }
      }
    }
  }
}
</style>
