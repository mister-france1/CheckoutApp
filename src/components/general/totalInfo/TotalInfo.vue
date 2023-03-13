<template>
  <div class="totalInfoWrapper">
    <div>
      <Item v-for="({title, price, count, image}, index) of items" :key="index" :title="title" :price="price"
            :count="count" :image="image"/>
      <div class="delimiter"></div>
      <Total title="Subtotal:" value="$362.70" />
      <Total title="Shipping:" />
      <div class="delimiter"></div>
      <Total title="Total" value="$362.70" bold />
    </div>
  </div>
</template>

<script setup lang="ts">
import Item from 'components/general/totalInfo/Item.vue';
import Total from 'components/general/totalInfo/Total.vue';

const items = [
  {
    title: 'Nike sneakers',
    price: '$120.90',
    count: 1,
    image: 'item1'
  },
  {
    title: 'Nike sneakers',
    price: '$120.90',
    count: 1,
    image: 'item2'
  },
  {
    title: 'Nike sneakers',
    price: '$120.90',
    count: 1,
    image: 'item3'
  }
];
</script>

<style scoped lang="scss">
@import '../../../css/mixins';

.totalInfoWrapper {
  margin-bottom: 40px;

  .delimiter {
    display: flex;
    height: 1px;
    background-color: #D6D8EE;
    margin-bottom: 16px;
  }
}
</style>
