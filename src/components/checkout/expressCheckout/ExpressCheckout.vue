<template>
  <div class="expressCheckout">
    <div class="title">
      Express Checkout
    </div>
    <div class="checkoutTypes">
      <CheckoutType v-for="({image, borderColor, backgroundColor}, index) in checkoutTypes"
                    :key="index"
                    :image="image"
                    :borderColor="borderColor"
                    :backgroundColor="backgroundColor" />
    </div>
  </div>
</template>

<script setup lang="ts">
import CheckoutType from 'components/checkout/expressCheckout/CheckoutType.vue';

interface CheckoutType {
  backgroundColor: string
  borderColor: string
  image: string
}

const checkoutTypes: CheckoutType[] = [
  {
    image: 'shopPay.svg',
    borderColor: 'rgba(90, 49, 244, 0.6)',
    backgroundColor: 'rgba(90, 49, 244, 0.1)'
  },
  {
    image: 'payPal.svg',
    borderColor: 'rgba(17, 57, 132, 0.6)',
    backgroundColor: 'rgba(17, 57, 132, 0.1)'
  },
  {
    image: 'gPay.svg',
    borderColor: 'rgba(234, 64, 50, 0.6)',
    backgroundColor: 'rgba(234, 64, 50, 0.1)'
  }
];
</script>

<style scoped lang="scss">
@import 'src/css/variables';

.expressCheckout {
  box-sizing: border-box;
  max-width: 540px;
  background: #FFFFFF;
  border: 1px solid #D6D8EE;
  border-radius: 32px;
  margin-bottom: 50px;
  padding: 30px;

  .title {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    color: #000034;
    margin-bottom: 20px;
  }

  .checkoutTypes {
    display: flex;
    justify-content: space-between;
  }
}
@media screen and (max-width: $wideTablet) {
  .expressCheckout {
    margin-bottom: 40px;
  }
}

@media screen and (max-width: $tablet) {
  .expressCheckout {
    .checkoutTypes {
      justify-content: flex-start;
      flex-wrap: wrap;
    }
  }
}

@media screen and (max-width: $mobile) {
  .expressCheckout {
    margin-bottom: 30px;
    padding: 16px;
  }
}
</style>
