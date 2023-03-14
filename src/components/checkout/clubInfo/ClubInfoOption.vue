<template>
  <div class="clubInfoOption">
    <img class="check" src="~/assets/check.svg"/>
    {{title}}
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: String
});
</script>

<style scoped lang="scss">
@import '../../../css/mixins';

.clubInfoOption {
  @include text();
  display: flex;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #4B4E68;

  .check {
    margin-right: 10px;
  }
}
</style>
