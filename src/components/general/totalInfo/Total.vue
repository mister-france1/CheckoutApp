<template>
  <div :class="['total', {'totalBold': bold}]">
    <div class="title">
      {{title}}
    </div>
    <div class="value">
      {{value}}
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: String,
  value: {
    type: String,
    default: 'Free'
  },
  bold: Boolean
});
</script>

<style scoped lang="scss">
@import '../../../css/mixins';

.total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  .title {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: #000034;
  }

  .value {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: #000034;
  }

  &.totalBold {
    .title {
      font-weight: 500;
    }

    .value {
      font-weight: 600;
    }
  }
}
</style>
