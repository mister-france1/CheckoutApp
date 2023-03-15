<template>
  <div class="carouselWrapper">
    <q-carousel
      swipeable
      animated
      v-model="slide"
      ref="carousel"
      infinite
    >
      <q-carousel-slide v-for="(slide, index) of slideList" :key="index" :name="slide.name"
                        :img-src="require('assets/items/'+slide.image)"/>

      <template v-slot:control>
        <q-carousel-control
          position="left"
          :offset="[30, 0]"
          class="control controlLeft"
          @click="$refs.carousel.previous()"
        >
          <div>
            <img class="icon" :src="require('assets/carousel/angle-left.svg')"/>
          </div>
        </q-carousel-control>

        <q-carousel-control
          position="right"
          :offset="[30, 0]"
          class="control controlRight"
          @click="$refs.carousel.next()"
        >
          <div>
            <img class="icon" :src="require('assets/carousel/angle-right.svg')"/>
          </div>
        </q-carousel-control>
      </template>
    </q-carousel>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Slide {
  name: number;
  image: string;
}

const slide = ref<number>(1);

const slideList: Slide[] = [
  {
    name: 1,
    image: 'item4.png'
  },
  {
    name: 2,
    image: 'item5.jpg'
  }
];
</script>

<style scoped lang="scss">
@import 'src/css/variables';

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

@media screen and (max-width: $mobile) {
  .carouselWrapper {
    .q-carousel {
      height: 226px;
    }
  }
}
</style>
