<template>
  <q-list class="radioGroup">
    <q-item v-for="({label, val, color, price}, index) of options" :key="index">
      <q-item-section>
        <q-radio v-model="value" :val="val" :color="color" >
          <slot>
            <div class="labelSlot">
              {{ label }}
            </div>
          </slot>
        </q-radio>
      </q-item-section>
      <q-item-section>
        <q-item-label>{{price}}</q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps(['modelValue', 'options']);
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
@import './src/css/mixins';

.radioGroup {
  .labelSlot {
    @include text();
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #4B4E68;
    margin-left: 10px;
  }

  .q-item {
    padding: 0;
    min-height: 34px;

    &:first-child {
      .q-item__section {
        justify-content: flex-start;
      }
    }

    &:last-child {
      .q-item__section {
        justify-content: flex-end;
      }
    }

    .q-radio__inner {
      color: #4B4E68;
      min-height: 24px;
      min-width: 24px;
      height: 24px;
      width: 24px;

      .q-radio__bg {
        width: unset;
        height: unset;
        top: unset;
        left: unset;

      }
    }

    .q-item__label {
      display: flex;
      justify-content: flex-end;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 46px;
      text-align: right;
      color: #000034;
    }
  }
}
</style>
