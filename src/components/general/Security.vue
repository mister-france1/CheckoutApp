<template>
  <div class="security">
    <div class="header">
      <img class="lock" src="~/assets/security/lock.svg"/>
      <slot>
        <div class="text">
          Secure SSL Encryption & Guaranteed Safe Checkout
        </div>
      </slot>
    </div>
    <div class="paymentWrapper">
      <div class="paymentList">
        <img v-for="(payment, index) of payments" :key="index" :src="require('assets/security/'+payment+'.svg')" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const payments: string[] = ['master-card', 'visa', 'paypal', 'amex', 'jcb', 'dci'];
</script>

<style scoped lang="scss">
@import '../../css/mixins';
@import 'src/css/variables';

.security {
  box-sizing: border-box;
  max-width: 449px;
  width: 100%;
  background: #FFFFFF;
  border: 1px solid #D6D8EA;
  border-radius: 32px;
  padding: 24px 30px 22px;

  .header {
    display: flex;
    justify-content: center;
    margin-bottom: 12px;

    .lock {
      margin-right: 8px;
    }

    .text {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      color: #4B4E68;
    }
  }

  .paymentWrapper {
    display: flex;
    justify-content: center;

    .paymentList {
      width: 275px;
      display: flex;
      justify-content: space-between;
    }
  }
}

@media screen and (max-width: $mobile) {
  .security {
    padding: 24px 16px 22px;
  }
}
</style>
