<template>
  <div class="billingAddress">
    <div :class="['billingOptions', {'billingAddressDifferent': !billingAddressSame}]">
      <div class="title">
        Billing Address
      </div>
      <div class="info">
        Specify the address for your payment option
      </div>
      <RadioGroup v-model="billingAddressSame" :options="options" />
    </div>
    <div v-if="!billingAddressSame">
      <Address name="billingAddress" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import RadioGroup from 'components/general/RadioGroup.vue';
import Address from 'components/general/Address.vue';
import { useCheckoutStore } from 'stores/checkout-store';

interface Option {
  label: string;
  val: boolean;
  color?: string;
}

const checkout = useCheckoutStore();

const billingAddressSame = computed<boolean>({
  get() {
    return checkout.billingAddressSame;
  },
  set(value: boolean) {
    checkout.billingAddressSame = value;
  }
});

const options: Option[] = [
  { label: 'Same as shipping address', val: true },
  { label: 'Use a different billing address', val: false, color: '#4B4E68' }
];
</script>

<style scoped lang="scss">
@import './src/css/mixins';
@import 'src/css/variables';

.billingAddress {
  margin-bottom: 50px;

  .billingOptions {
    .title {
      @include text();
      font-weight: 600;
      font-size: 24px;
      line-height: 34px;
      color: #000034;
      margin-bottom: 5px;
    }

    .info {
      @include text();
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      color: #84849A;
      margin-bottom: 20px;
    }

    &.billingAddressDifferent {
      margin-bottom: 20px;
    }
  }
}

@media screen and (max-width: $wideTablet) {
  .billingAddress {
    margin-bottom: 40px;
  }
}

@media screen and (max-width: $mobile) {
  .billingAddress {
    margin-bottom: 30px;

    .billingOptions {
      .title {
        font-size: 20px;
        line-height: 30px;
      }
    }
  }
}
</style>
