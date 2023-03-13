<template>
  <div class="thankYouPage">
    <div class="main">
      <ThankYouHeader />
      <ShippingInfo />
    </div>
    <div class="sidebar">
      <TotalInfo />
      <Security />
    </div>
  </div>
</template>

<script setup lang="ts">
import TotalInfo from 'components/general/totalInfo/TotalInfo.vue';
import Security from 'components/general/Security.vue';
import ThankYouHeader from 'components/thankyou/ThankYouHeader.vue';
import ShippingInfo from 'components/thankyou/shippingInfo/ShippingInfo.vue';
</script>

<style scoped lang="scss">
.thankYouPage {
  display: flex;
  cursor: default;

  .main {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    flex: 1;
    margin-top: 60px;
    padding-right: 60px;

    > * {
      max-width: 540px;
      width: 100%;
    }
  }

  .sidebar {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 1;
    padding: 65px 0 255px 60px;
    background-color: #EBECF3;

    > * {
      max-width: 450px;
      width: 100%;
    }
  }
}
</style>
