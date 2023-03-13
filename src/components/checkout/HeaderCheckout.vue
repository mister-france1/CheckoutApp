<template>
  <div className="headerCheckout">
    <div class="title">
      Checkout
    </div>

    <q-breadcrumbs class="breadcrumbs">
      <template v-slot:separator>
        <q-icon class="separator">
          <img src="~assets/angle-right.svg" />
        </q-icon>
      </template>

      <q-breadcrumbs-el label="Cart" class="firstLevel"/>
      <q-breadcrumbs-el label="Shipping & Billing" class="secondLevel" />
    </q-breadcrumbs>
  </div>
</template>

<script setup>
</script>

<style scoped lang="scss">
@import './src/css/mixins';

.headerCheckout {
  .title {
    @include text();
    font-weight: 700;
    font-size: 36px;
    line-height: 46px;
    color: #000034;
  }

  .breadcrumbs {
    @include text();
    margin-top: 10px;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;

    .separator {
      width: 8px;
      height: 8px;
    }

    .firstLevel {
      color: #84849A;
    }

    .secondLevel {
      color: #000034;
    }
  }
}
</style>
