<template>
  <q-select v-model="value"
            :label="label"
            :type="type"
            lazy-rules="ondemand"
            :rules="rules"
            :class="['select', {'notEmpty': !!modelValue, 'noIcon': !icon}]"
            rounded
            outlined
            no-error-icon
            hide-bottom-space>

    <template v-slot:prepend>
      <img v-if="icon" class="icon" :src="require('assets/'+icon)"/>
    </template>

  </q-select>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps(['modelValue', 'label', 'type', 'icon', 'required', 'validators']);
const emit = defineEmits(['update:modelValue']);

const requiredValidator = [(val: string) => !!val || props.required || 'Field is required'];

const rules = computed(() => {
  return [
    ...(props.required ? requiredValidator : []),
    ...(props.validators ? props.validators : [])
  ];
});

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
@import 'src/css/inputSelectMixin';

.select {
  @include inputSelectBase();

  &.q-field--auto-height.q-field--labeled {
    .q-field__control-container {
      padding-top: 12px;
    }
  }
}
</style>

