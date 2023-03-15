<template>
  <div class="supportWrapper">
    <div class="imageWrapper">
      <img :src="require('assets/support.svg')" />
    </div>
    <div class="info">
      <div class="time">24/7</div>
      <div class="title">Support</div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.supportWrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  background: #FFFFFF;
  border: 1px solid #DADDF5;
  box-shadow: 0 10px 30px rgba(22, 8, 49, 0.05);
  border-radius: 16px;
  padding: 35px 0;
  margin-left: 30px;
  width: 100%;
  max-width: 285px;

  .imageWrapper {
    margin-right: 33px;
  }

  .info {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;

    .time {
      color: #000034;
    }

    .title {
      color: #4B4E68;
    }
  }
}
</style>
