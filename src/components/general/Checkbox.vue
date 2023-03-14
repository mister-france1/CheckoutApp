<template>
  <div class="checkboxWrapper">
    <q-field
      v-model="value"
      :rules="rules"
      borderless
      dense
      no-error-icon
      hide-bottom-space
    >
      <template v-slot:control>
        <q-checkbox
          class="checkbox"
          v-model="value"
          :label="label"
        >
          <slot></slot>
        </q-checkbox>
      </template>
    </q-field>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps(['modelValue', 'label', 'required', 'validators']);
const emit = defineEmits(['update:modelValue']);

const requiredValidator = [(val: boolean) => val || props.required || 'Field is required'];

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
@import './src/css/mixins';

.checkboxWrapper {
  .q-field__bottom {
    @include errorText();
  }

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
}
</style>
