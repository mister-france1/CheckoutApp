<template>
  <div class="quantity">
    <div class="minusWrapper">
      <img :src="require('assets/quantity/minus.svg')" @click="onDecreaseCount" />
    </div>
    <div class="value">
      {{count}}
    </div>
    <div class="plusWrapper">
      <img :src="require('assets/quantity/plus.svg')" @click="onIncreaseCount" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const count = ref(1);

const onDecreaseCount = () => {
  if (count.value === 1) {
    return;
  }

  count.value--;
};

const onIncreaseCount = () => {
  count.value++;
};

</script>

<style scoped lang="scss">
.quantity {
  display: flex;

  .minusWrapper,
  .plusWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 57px;
    height: 50px;
    background: #FFFFFF;
    border-radius: 16px;
  }

  .minusWrapper {
    margin-right: 30px;
  }

  .value {
    display: flex;
    align-items: center;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    color: #000034;
  }

  .plusWrapper {
    margin-left: 30px;
  }
}
</style>
