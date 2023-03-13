<template>
  <div class="carouselWrapper">
    <q-carousel
      swipeable
      animated
      v-model="slide"
      ref="carousel"
      infinite
    >
      <q-carousel-slide :name="1" :img-src="require('assets/items/item4.png')" />

      <template v-slot:control>
        <q-carousel-control
          position="left"
          :offset="[30, 0]"
          class="control controlLeft"
        >
          <div @click="$refs.carousel.previous()">
            <img class="icon" :src="require('assets/carousel/angle-left.svg')" />
          </div>
        </q-carousel-control>

        <q-carousel-control
          position="right"
          :offset="[30, 0]"
          class="control controlRight"
        >
          <div @click="$refs.carousel.next()">
            <img class="icon" :src="require('assets/carousel/angle-right.svg')" />
          </div>
        </q-carousel-control>
      </template>
    </q-carousel>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const slide = ref(1);
</script>

<style scoped lang="scss">
.carouselWrapper {
  margin-bottom: 30px;

  .q-carousel {
    border-radius: 32px;

    .q-carousel__control {
      top: calc(50% - 22px);

      > * {
        width: 20px;
        height: 20px;
      }
    }

    .control {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 44px;
      height: 44px;
      border-radius: 50%;
      cursor: pointer;
    }

    .controlLeft {
      border: 1px solid #FFFFFF;
      background-color: transparent;
    }

    .controlRight {
      background-color: rgba(255, 255, 255, 0.5);
    }
  }
}
</style>
