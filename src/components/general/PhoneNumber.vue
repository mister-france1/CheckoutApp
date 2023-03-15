<template>
  <div class="phoneNumber">
    <Input v-model="phoneNumber" type="text" mask="#########" label="Phone number" required="Enter a phone number">
      <div class="countryCode">
        <q-select
          v-model="countryCode"
          :options="countryCodes"
          @click.stop
        >
          <template v-slot:selected>
            <div class="selectedCodeWrapper">
              <div class="flag">
                {{ countryCode.flag }}
              </div>
              <div class="code">
                {{ countryCode.label }}
              </div>
            </div>
          </template>
        </q-select>
      </div>
    </Input>
  </div>
</template>

<script setup lang="ts">
import { ref, toRefs, watch } from 'vue';
import countryCodes from 'src/constants/phoneNumberCountryList';
import Input from 'components/general/Input.vue';
import DELAY_TIME from 'src/constants/delayTime';

const props = defineProps(['modelValue']);
const emit = defineEmits(['update:modelValue']);

const {modelValue: code} = toRefs(props);

const countryCode = ref({
  flag: '',
  label: ''
});

if (code.value) {
  countryCode.value.label = code.value.countryCode;

  if (countryCodes) {
    const country = countryCodes.find((country) => country.label === code.value.countryCode);

    if (country) {
      countryCode.value.flag = country.flag;
    }
  }
}

const phoneNumber = ref('');

let phoneTimer: ReturnType<typeof setTimeout>;

watch(
  [countryCode, phoneNumber],
  ([newCountryCode, newPhoneNumber], [oldCountryCode, oldPhoneNumber]) => {
    if (newCountryCode !== oldCountryCode || newPhoneNumber !== oldPhoneNumber) {
      clearTimeout(phoneTimer);

      phoneTimer = setTimeout(() => {
        emit('update:modelValue', {
          countryCode: newCountryCode.label,
          number: newPhoneNumber
        });
      }, DELAY_TIME);
    }
  }
);
</script>

<style scoped lang="scss">
@import './src/css/mixins';

.phoneNumber {
  display: flex;
  align-items: center;

  .q-field {
    flex: 1;
  }

  &::v-deep(.input) {
    .q-field__prepend {
      position: relative;
      left: -12px;
      pointer-events: unset;

      .q-field__control {
        background-color: #EFF0F5;
        color: transparent;
        border-radius: 28px 0 0 28px
      }
    }
  }

  .countryCode {
    width: 124px;

    .selectedCodeWrapper {
      display: flex;

      .flag {
        margin-right: 10px;
      }

      .code {
        @include text();
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #000034;
      }
    }
  }
}
</style>
