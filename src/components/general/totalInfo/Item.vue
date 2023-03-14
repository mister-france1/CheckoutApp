<template>
  <div class="itemWrapper">
    <div class="imageWrapper">
      <img class="image" :src="require('assets/items/'+image+'.png')"/>
      <div class="count">
        {{count}}
      </div>
    </div>
    <div class="info">
      <div class="title">
        {{title}}
      </div>
      <div class="price">
        {{price}}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: String,
  price: String,
  count: Number,
  image: String
});
</script>

<style scoped lang="scss">
.itemWrapper {
  display: flex;
  margin-bottom: 20px;

  .imageWrapper {
    display: flex;
    position: relative;
    margin-right: 20px;

    .image {

    }

    .count {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      right: -6px;
      top: -6px;
      background-color: #4B4E68;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      color: #fff;
    }
  }

  .info {
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;

    .title {
      color: #000034;
    }

    .price {
      color: #000034;
    }
  }
}
</style>
