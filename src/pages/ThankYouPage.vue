<template>
  <div class="thankYouPage">
    <div class="main">
      <OrderSummary />
      <ThankYouHeader />
      <ShippingInfo />
      <Security class="thankyouSecurityWrapperMobile"/>
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
import OrderSummary from 'components/general/OrderSummary.vue';
</script>

<style scoped lang="scss">
@import 'src/css/variables';
.thankYouPage {
  display: flex;
  cursor: default;

  .main {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    flex: 1;
    margin-top: 60px;
    padding: 0 60px 0 40px;

    > * {
      max-width: 540px;
      width: 100%;
    }

    .thankyouSecurityWrapperMobile {
      display: none;
    }
  }

  .sidebar {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 1;
    padding: 65px 40px 255px 60px;
    background-color: #EBECF3;

    > * {
      max-width: 450px;
      width: 100%;
    }
  }
}

@media screen and (max-width: $smallDesktop) {
  .thankYouPage {
    .main {
      padding: 0 40px;
    }

    .sidebar {
      padding: 65px 40px 255px 40px;
    }
  }
}

@media screen and (max-width: $wideTablet) {
  .thankYouPage {
    .main {
      align-items: center;

      .thankyouSecurityWrapperMobile {
        display: block;
        margin: 40px 0 42px;
      }
    }

    .sidebar {
      display: none;
    }
  }
}

@media screen and (max-width: $mobile) {
  .thankYouPage {
    .main {
      padding: 0 16px;
    }
  }
}
</style>
