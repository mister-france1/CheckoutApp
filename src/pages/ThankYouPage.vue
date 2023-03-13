<template>
  <div>{{ message }}</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const message = ref<string>('Thank you page!')
</script>

<style scoped lang="scss">

</style>
