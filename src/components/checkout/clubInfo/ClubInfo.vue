<template>
  <div class="clubInfo">
    <div class="title">
      The ultimate jewellery club
    </div>
    <div class="description">
      Ornare rhoncus nunc ut felis. Faucibus dolor at ultrices tincidunt. Pulvinar sed justo et viverra pellentesque.
    </div>
    <div>
      <ClubInfoOption v-for="(option, index) in options" :key="index" :title="option"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import ClubInfoOption from 'components/checkout/clubInfo/ClubInfoOption.vue';

const options = ['Extra 10$ off!', 'Free shipping on marked club items!', 'Free returns on marked club items!'];
</script>

<style scoped lang="scss">
@import '../../../css/mixins';

.clubInfo {
  box-sizing: border-box;
  background: #FFFFFF;
  border: 1px solid #D6D8EA;
  border-radius: 32px;
  padding: 30px;

  .title {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: #000034;
    margin-bottom: 10px;
  }

  .description {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #4B4E68;
    margin-bottom: 20px;
  }
}
</style>
