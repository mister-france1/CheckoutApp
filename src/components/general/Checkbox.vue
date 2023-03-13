<template>
  <q-checkbox class="checkbox" v-model="value" :label="label">
    <slot></slot>
  </q-checkbox>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps(['modelValue', 'label']);
const emit = defineEmits(['update:modelValue']);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit('update:modelValue', value);
  }
});
</script>

<style lang="scss">
.checkbox {
  align-items: flex-start;

  .q-checkbox__inner {
    color: #4B4E68;
    min-width: 32px;

    &:before {
      background-color: unset !important;
    }

    .q-checkbox__bg {
      color: #4B4E68;
      top: 0;
      left: 0;
      width: 20px;
    }
  }
}
</style>
