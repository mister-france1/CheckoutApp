<template>
  <div class="upsellMeta">
    <div class="price">
      <div class="title">
        Price:
      </div>
      <div class="value">
        $50
      </div>
      <div class="discount">
        -80%
      </div>
    </div>

    <div class="quantityWrapper">
      <div class="title">
        Quantity:
      </div>
      <Quantity />
    </div>
  </div>
</template>

<script setup lang="ts">
import Quantity from 'components/upsell/items/Quantity.vue';
</script>

<style scoped lang="scss">
@import 'src/css/variables';
.upsellMeta {
  height: 225px;
  background: #FFFFFF;
  border: 1px solid #DADDF5;
  box-shadow: 0 10px 30px rgba(22, 8, 49, 0.05);
  border-radius: 16px;
  padding: 45px 125px 40px;
  margin-bottom: 40px;

  .price {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 27px;

    font-family: 'Poppins';
    font-style: normal;
    color: #000034;

    .title {
      font-weight: 500;
      font-size: 20px;
      line-height: 30px;
      margin-right: 10px;
    }

    .value {
      font-weight: 600;
      font-size: 30px;
      line-height: 40px;
      margin-right: 10px;
    }

    .discount {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 84px;
      height: 36px;
      background: #EFF0F5;
      border-radius: 8px;
      font-weight: 500;
      font-size: 20px;
      line-height: 30px;
    }
  }

  .quantityWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(239, 240, 245, 0.5);
    border-radius: 16px;
    padding: 15px 0;

    .title {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 30px;
      color: #4B4E68;
      margin-right: 39px;
    }
  }
}

@media screen and (max-width: $wideTablet) {
  .upsellMeta {
    padding: 45px 40px 40px;
  }
}

@media screen and (max-width: $tablet) {
  .upsellMeta {
    padding: 45px 16px 40px;
  }
}

@media screen and (max-width: $mobile) {
  .upsellMeta {
    .quantityWrapper {
      .title {
        margin-right: 30px;
      }
    }
  }
}
</style>
