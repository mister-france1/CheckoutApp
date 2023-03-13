<template>
  <div class="paymentMethod">
    <div class="title">
      Payment Method
    </div>
    <div class="info">
      All transaction are secured and encryted
    </div>
    <div class="row-wrapper">
      <Input v-model="card" label="Card Number" type="text" icon="card.svg" mask="card"/>
    </div>
    <div class="row-wrapper">
      <Input v-model="nameCard" label="Name on Card" type="text" icon="name.svg"/>
    </div>
    <div class="row-wrapper">
      <div class="col">
        <Input v-model="date" label="MM/YY" type="text" mask="##/##"/>
      </div>
      <div class="col">
        <Input v-model="cvv" label="CVV" type="text" mask="###"/>
      </div>
    </div>
    <div class="row-wrapper">
      <Checkbox v-model="agreements">
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
import { ref } from 'vue';
import Input from 'components/general/Input.vue';
import Checkbox from 'components/general/Checkbox.vue';

const card = ref();
const nameCard = ref();
const date = ref();
const cvv = ref();
const agreements = ref(false);
</script>

<style scoped lang="scss">
@import './src/css/mixins';

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
        color: #000034;
      }
    }
  }

}
</style>
