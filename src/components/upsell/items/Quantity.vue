<template>
  <div class="quantity">
    <div class="minusWrapper" @click="onDecreaseCount">
      <img :src="require('assets/quantity/minus.svg')"/>
    </div>
    <div class="value">
      {{count}}
    </div>
    <div class="plusWrapper" @click="onIncreaseCount">
      <img :src="require('assets/quantity/plus.svg')"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const count = ref<number>(1);

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
@import 'src/css/variables';
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
    user-select: none;
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

@media screen and (max-width: $mobile) {
  .quantity {
    .minusWrapper {
      margin-right: 20px;
    }

    .plusWrapper {
      margin-left: 20px;
    }
  }
}
</style>
