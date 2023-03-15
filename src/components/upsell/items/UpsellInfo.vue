<template>
  <div class="upsellInfo">
    Ornare rhoncus nunc ut felis. Faucibus dolor at ultrices tincidunt. Pulvinar sed justo et viverra pellentesque.
    <br/><br/>
    Mauris augue nulla proin vel a. Facilisis fringilla molestie dignissim elit orci malesuada. Lorem sit sagittis vitae
    nulla id. Mauris ipsum sed sed faucibus. Nulla amet metus gravida orci faucibus nisl eros arcu lorem. Nullam ornare
    molestie nam id gravida volutpat bibendum sem feugiat. Neque vulputate in et maecenas porta mi tellus. In massa
    porttitor urna quis volutpat at.
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
@import 'src/css/variables';

.upsellInfo {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: #4B4E68;
  margin-bottom: 40px;
}

@media screen and (max-width: $tablet) {
  .upsellInfo {
    font-size: 16px;
    line-height: 26px;
  }
}

@media screen and (max-width: $mobile) {
  .upsellInfo {
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 30px;
  }
}
</style>
