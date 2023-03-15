<template>
  <div class="thankYouHeader">
    <div class="likeWrapper">
      <img src="~assets/like.svg" />
    </div>
    <div class="title">
      Thank you for your order
    </div>
    <div class="info">
      Your order is confirmed
    </div>
    <div class="order">
      Order ID: #10040
    </div>
    <div class="backShopWrapper">
      <Button label="Back to Shop" path="/" iconLeft="arrow-left.svg" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from 'components/general/Button.vue';
</script>

<style scoped lang="scss">
@import './src/css/mixins';
@import 'src/css/variables';

.thankYouHeader {
  display: flex;
  flex-direction: column;
  align-items: center;

  .likeWrapper {
    margin-bottom: 40px;
  }

  .title {
    @include text();
    font-weight: 600;
    font-size: 24px;
    line-height: 34px;
    text-align: center;
    color: #000034;
    margin-bottom: 5px;
  }

  .info {
    @include text();
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    text-align: center;
    color: #4B4E68;
    margin-bottom: 30px;
  }

  .order {
    background: rgb(228, 228, 255, 0.6);
    border: 1px solid #7782F1;
    border-radius: 12px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    color: #7782F1;
    margin-bottom: 30px;
    padding: 6px 15px 5px;
  }

  .backShopWrapper {
    display: flex;
    justify-content: flex-start;
    width: 229px;
    margin-bottom: 50px;
  }
}

@media screen and (max-width: $wideTablet) {
  .thankYouHeader {
    margin-top: 40px;
  }
}
</style>
