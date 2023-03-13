<template>
  <div class="shippingInfo">
    <div class="row-wrapper">
      <Info title="Name:" value="Oleo Bone" />
      <Info title="Email:" value="oleo_bone@gmail.com" />
    </div>
    <div class="row-wrapper">
      <Info title="Shipping Address:" value="4140 Parker Rd. Allentown, New Mexico 31134" />
      <Info title="Billing Address:" value="Same as shipping" />
    </div>
    <div class="row-wrapper">
      <Info title="Shipping:" value="Free" />
      <Info title="Payment Method:" value="Credit Card" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Info from 'components/thankyou/shippingInfo/Info.vue';
</script>

<style scoped lang="scss">
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
</style>
