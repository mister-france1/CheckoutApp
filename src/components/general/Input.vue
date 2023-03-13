<template>
  <q-input v-model="value"
           :label="label"
           :type="type"
           :class="['input', {'notEmpty': !!modelValue, 'noIcon': !icon}]"
           rounded
           outlined>

    <template v-slot:prepend>
      <img v-if="icon" class="icon" :src="require('assets/'+icon)" />
    </template>

  </q-input>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps(['modelValue', 'label', 'type', 'icon']);
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
@import 'src/css/inputSelectMixin';

.input {
  @include inputSelectBase();
}


</style>

