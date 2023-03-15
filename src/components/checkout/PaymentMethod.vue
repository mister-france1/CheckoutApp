<template>
  <div class="paymentMethod">
    <div class="title">
      Payment Method
    </div>
    <div class="info">
      All transaction are secured and encryted
    </div>
    <div class="row-wrapper">
      <Input v-model="card" label="Card Number" type="text" icon="card.svg" mask="card" required="Enter a card number"
             :validators="cardValidators"/>
    </div>
    <div class="row-wrapper">
      <Input v-model="nameCard" label="Name on Card" type="text" icon="name.svg" required="Enter a name on card"/>
    </div>
    <div class="row-wrapper">
      <div class="col">
        <Input v-model="date" label="MM/YY" type="text" mask="##/##" required="Enter a date"/>
      </div>
      <div class="col">
        <Input v-model="cvv" label="CVV" type="text" mask="###" required="Enter a CVV"/>
      </div>
    </div>
    <div class="row-wrapper">
      <Checkbox v-model="agreements" required="Agreements is required">
        <div class="agreementsContent">
          By checking this box, I acknowledge that I have read and agree to the <span class="highlighted">Terms of Service</span>,
          and <span class="highlighted">Monthly Billing Terms</span> of this website and want to opt-in for the monthly
          billed Dream Collection Club®
        </div>
      </Checkbox>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import Input from 'components/general/Input.vue';
import Checkbox from 'components/general/Checkbox.vue';
import { useCheckoutStore } from 'stores/checkout-store';

interface Checkout {
  cardNumber: string;
  nameCard: string;
  date: string;
  cvv: string;
  agreements: boolean;
}

const cardValidators = [
  (cardNumber: string) => /^(\d{4}\s){3}\d{4}$/.test(cardNumber) || 'Enter valid card number'
];

const checkout = useCheckoutStore();

const onUpdate = (type: keyof Checkout, data: string | boolean) => {
  switch (type) {
    case 'agreements':
      checkout.paymentMethod.agreements = data as boolean;
      break;
    default:
      checkout.paymentMethod[type] = data as string;
      break;
  }
};

const card = computed<string>({
  get() {
    return checkout.paymentMethod.cardNumber;
  },
  set(value: string) {
    onUpdate('cardNumber', value);
  }
});

const nameCard = computed<string>({
  get() {
    return checkout.paymentMethod.nameCard;
  },
  set(value: string) {
    onUpdate('nameCard', value);
  }
});

const date = computed<string>({
  get() {
    return checkout.paymentMethod.nameCard;
  },
  set(value: string) {
    onUpdate('date', value);
  }
});

const cvv = computed<string>({
  get() {
    return checkout.paymentMethod.nameCard;
  },
  set(value: string) {
    onUpdate('cvv', value);
  }
});

const agreements = computed<boolean>({
  get() {
    return checkout.paymentMethod.agreements;
  },
  set(value: boolean) {
    onUpdate('agreements', value);
  }
});
</script>

<style scoped lang="scss">
@import './src/css/mixins';
@import 'src/css/variables';

.paymentMethod {
  margin-bottom: 50px;

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
    margin-bottom: 35px;
  }

  .row-wrapper {
    display: flex;
    margin-bottom: 20px;

    > * {
      flex-grow: 1;
    }

    &:last-child {
      margin-bottom: unset;
    }

    .col {
      &:first-child {
        margin-right: 8px;
      }

      &:last-child {
        margin-left: 8px;
      }
    }

    .agreementsContent {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      color: #4B4E68;

      .highlighted {
        font-weight: 600;
        color: #000034;
      }
    }
  }
}

@media screen and (max-width: $wideTablet) {
  .paymentMethod {
    margin-bottom: 40px;
  }
}

@media screen and (max-width: $mobile) {
  .paymentMethod {
    margin-bottom: 30px;

    .title {
      font-size: 20px;
      line-height: 30px;
    }

    .info {
      margin-bottom: 30px;
    }

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
