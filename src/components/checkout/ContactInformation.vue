<template>
  <div class="contactInfo">
    <div class="title">
      Contact Information
    </div>
    <div>
      <Input v-model="email" label="Email Address" type="email" icon="email.svg" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Input from 'components/general/Input.vue';

const email = ref('');
</script>

<style scoped lang="scss">
.contactInfo {
  margin-bottom: 50px;

  .title {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 34px;
    color: #000034;
    margin-bottom: 30px;
  }
}
</style>
