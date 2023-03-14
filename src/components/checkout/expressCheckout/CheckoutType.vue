<template>
  <div class="checkoutType" :style="{'border-color': borderColor, 'background-color': backgroundColor}">
    <img :src="require('assets/'+image)" />
  </div>
</template>

<script setup>
defineProps({
  borderColor: String,
  backgroundColor: String,
  image: String
});
</script>

<style scoped lang="scss">
.checkoutType {
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 146px;
  height: 50px;
  cursor: pointer;

  border-width: 1px;
  border-style: solid;
  border-radius: 16px;
}
</style>
