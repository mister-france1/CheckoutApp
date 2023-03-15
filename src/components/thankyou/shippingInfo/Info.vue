<template>
  <div class="infoWrapper">
    <div class="title">{{title}}</div>
    <div class="value">{{value}}</div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: String,
  value: String
});
</script>

<style scoped lang="scss">
@import 'src/css/variables';
.infoWrapper {
  display: flex;
  flex-direction: column;
  flex: 1;
  font-family: 'Poppins';
  font-style: normal;
  font-size: 14px;
  line-height: 24px;

  .title {
    font-weight: 400;
    color: #4B4E68;
  }

  .value {
    font-weight: 500;
    color: #000034;
    max-width: 200px;
  }
}

@media screen and (max-width: $mobile) {
  .infoWrapper {
    .value {
      max-width: unset;
    }
  }
}
</style>
