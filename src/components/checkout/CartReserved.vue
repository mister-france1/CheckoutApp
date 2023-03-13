<template>
  <div class="cartReserved">
    <div class="info">
      🔥 Your cart is reserved for <b>10:00</b> minutes
    </div>
    <div class="timeWrapper">
      <div class="timeBox">00</div>
      <div class="delimiter">
        :
      </div>
      <div class="timeBox">{{ minutes }}</div>
      <div class="delimiter">
        :
      </div>
      <div class="timeBox">{{ seconds }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onUnmounted } from 'vue';

const minutes = ref(10);
const seconds = ref(0);

const timer = setInterval(() => {
  if (seconds.value > 0) {
    seconds.value--;
  } else {
    seconds.value = 59;
    minutes.value--;
  }
}, 1000);

onUnmounted(() => clearInterval(timer));
</script>

<style scoped lang="scss">
.cartReserved {
  width: 540px;
  height: 139px;
  background: rgba(151, 154, 184, 0.1);
  border-radius: 32px;
  margin: 50px 0 30px;
  padding: 30px;

  .info {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    color: #000034;
    margin-bottom: 15px;
  }

  .timeWrapper {
    display: flex;
    align-items: center;

    .timeBox {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 46px;
      height: 37px;
      background: #FFFFFF;
      border-radius: 12px;
    }

    .delimiter {
      margin: 0 8px;
    }
  }
}
</style>
