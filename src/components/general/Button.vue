<template>
  <div class="button" @click="onRedirect">
    <img v-if="iconLeft" class="iconLeft" :src="require('assets/'+iconLeft)" />
    <span class="text">
      {{label}}
    </span>
    <img v-if="iconRight" class="iconRight" :src="require('assets/'+iconRight)" />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
  iconLeft: {
    type: String,
    default: null
  },
  iconRight: {
    type: String,
    default: null
  },
});

const router = useRouter();
const onRedirect = () => {
  if (typeof props.path !== 'string') {
    throw new Error('Path must be a string');
  }

  router.push(props.path);
};
</script>

<style scoped lang="scss">
@import './src/css/mixins';

.button {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 16px 40px;
  width: 257px;
  height: 56px;
  background: #050824;
  border-radius: 100px;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: #FFFFFF;

  .text {
    @include text();
  }

  .iconLeft {
    margin-right: 6px;
  }

  .iconRight {
    margin-left: 6px;
  }
}
</style>
