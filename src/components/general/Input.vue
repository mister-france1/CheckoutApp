<template>
  <q-input v-model="value"
           :label="label"
           :type="type"
           :mask="mask"
           lazy-rules
           :rules="rules"
           :class="['input', {'notEmpty': !!modelValue, 'noIcon': !icon}]"
           rounded
           outlined
           no-error-icon
           hide-bottom-space>

    <template v-slot:prepend>
      <slot>
        <img v-if="icon" class="icon" :src="require('assets/'+icon)"/>
      </slot>
    </template>

  </q-input>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import DELAY_TIME from 'src/constants/delayTime';

const props = defineProps(['modelValue', 'label', 'type', 'icon', 'mask', 'required', 'validators']);
const emit = defineEmits(['update:modelValue']);

const requiredValidator = [(val: string) => !!val || props.required || 'Field is required'];

const rules = computed(() => {
  return [
    ...(props.required ? requiredValidator : []),
    ...(props.validators ? props.validators : [])
  ];
});

const value = ref();
let inputTimer: ReturnType<typeof setTimeout>;

watch(
  [value],
  ([newValue], [oldValue]) => {
    if (newValue !== oldValue) {
      clearTimeout(inputTimer);

      inputTimer = setTimeout(() => {
        emit('update:modelValue', newValue);
      }, DELAY_TIME);
    }
  }
);
</script>

<style lang="scss">
@import 'src/css/inputSelectMixin';

.input {
  @include inputSelectBase();
}
</style>

