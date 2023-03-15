<template>
  <div class="shippingAddress">
    <div class="title">
      Shipping Address
    </div>
    <Address name="shippingAddress"/>
  </div>
</template>

<script setup lang="ts">
import Address from 'components/general/Address.vue';
</script>

<style scoped lang="scss">
@import 'src/css/variables';

.shippingAddress {
  margin-bottom: 50px;

  .title {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 34px;
    color: #000034;
    margin-bottom: 20px;
  }
}

@media screen and (max-width: $wideTablet) {
  .shippingAddress {
    margin-bottom: 40px;
  }
}

@media screen and (max-width: $mobile) {
  .shippingAddress {
    margin-bottom: 30px;

    .title {
      font-size: 20px;
      line-height: 30px;
    }
  }
}
</style>
