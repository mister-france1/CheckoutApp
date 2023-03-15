<template>
  <div class="address">
    <div class="countryWrapper">
      <Select v-model="country" :options="CountryList" label="Country" type="text" icon="country.svg" required="Select a country"/>
    </div>
    <div class="row-wrapper">
      <div class="col">
        <Input v-model="firstName" label="First Name" type="text" icon="name.svg" required="Enter a first name"/>
      </div>
      <div class="col">
        <Input v-model="lastName" label="Last Name" type="text" icon="name.svg" required="Enter a last name"/>
      </div>
    </div>
    <div class="addressWrapper">
      <Input v-model="address" label="Address" type="text" icon="address.svg" required="Enter an address"/>
    </div>
    <div class="row-wrapper">
      <div class="col">
        <Input v-model="city" label="City" type="text" required="Enter a city"/>
      </div>
      <div class="col">
        <Input v-model="postalCode" label="Postal Code" type="text" required="Enter a postal code"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import Input from './Input.vue';
import Select from './Select.vue';
import CountryList from 'src/constants/countryList';
import { useCheckoutStore } from 'stores/checkout-store';

const props = defineProps({
  name: {
    type: String,
    required: true
  }
});

interface Checkout {
  country: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  postalCode: string;
}

interface Address {
  shippingAddress: string;
  billingAddress: string;
}

const checkout = useCheckoutStore();

const onUpdate = (type: keyof Checkout, data: string) => {
  checkout[props.name as keyof Address][type] = data;
};

const country = computed<string>({
  get() {
    return checkout[props.name as keyof Address].country;
  },
  set(value: string) {
    onUpdate('country', value);
  }
});

const firstName = computed<string>({
  get() {
    return checkout[props.name as keyof Address].firstName;
  },
  set(value: string) {
    onUpdate('firstName', value);
  }
});

const lastName = computed<string>({
  get() {
    return checkout[props.name as keyof Address].lastName;
  },
  set(value: string) {
    onUpdate('lastName', value);
  }
});

const address = computed<string>({
  get() {
    return checkout[props.name as keyof Address].address;
  },
  set(value: string) {
    onUpdate('address', value);
  }
});

const city = computed<string>({
  get() {
    return checkout[props.name as keyof Address].city;
  },
  set(value: string) {
    onUpdate('city', value);
  }
});

const postalCode = computed<string>({
  get() {
    return checkout[props.name as keyof Address].postalCode;
  },
  set(value: string) {
    onUpdate('postalCode', value);
  }
});
</script>

<style scoped lang="scss">
@import 'src/css/variables';

.address {
  .countryWrapper {
    margin-bottom: 30px;
  }

  .addressWrapper {
    margin-bottom: 20px;
  }

  .row-wrapper:not(:last-child) {
    margin-bottom: 20px;
  }

  .row-wrapper {
    display: flex;

    .col {
      &:first-child {
        margin-right: 8px;
      }

      &:last-child {
        margin-left: 8px;
      }
    }
  }
}

@media screen and (max-width: $mobile) {
  .address {
    .row-wrapper {
      display: block;

      .col {
        &:first-child {
          margin-right: 0;
          margin-bottom: 20px;
        }

        &:last-child {
          margin-left: 0;
        }
      }
    }
  }
}
</style>
