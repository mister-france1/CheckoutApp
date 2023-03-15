<template>
  <div class="contactInfo">
    <div class="title">
      Contact Information
    </div>
    <div class="rowWrapper">
      <Input :model-value="checkout.email"
             @update:modelValue="onUpdate('email', $event)"
             label="Email Address"
             type="email"
             icon="email.svg"
             required="Enter an email"
             :validators="emailValidators"
      />
    </div>
    <div class="rowWrapper">
      <PhoneNumber :model-value="checkout.phoneNumber"
                   @update:modelValue="onUpdate('phoneNumber', $event)"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import Input from 'components/general/Input.vue';
import PhoneNumber from 'components/general/PhoneNumber.vue';

import { useCheckoutStore } from 'stores/checkout-store';

interface PhoneNumber {
  countryCode: string;
  number: string;
}
interface Checkout {
  email: string;
  phoneNumber: PhoneNumber;
}

const emailValidators = [
  (val: string) => /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(val) || 'Enter a valid email address'
];

const checkout = useCheckoutStore();

const onUpdate = (type: keyof Checkout, data: string | PhoneNumber) => {
  switch (type) {
    case 'phoneNumber':
      checkout.phoneNumber = data as PhoneNumber;
      break;
    default:
      (checkout[type] as string) = data as string;
      break;
  }
};
</script>

<style scoped lang="scss">
@import 'src/css/variables';

.contactInfo {
  margin-bottom: 50px;

  .title {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 34px;
    color: #000034;
    margin-bottom: 30px;
  }

  .rowWrapper {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: unset;
    }
  }
}
@media screen and (max-width: $wideTablet) {
  .contactInfo {
    margin-bottom: 40px;
  }
}

@media screen and (max-width: $mobile) {
  .contactInfo {
    margin-bottom: 30px;

    .title {
      font-size: 20px;
      line-height: 30px;
    }
  }
}
</style>
