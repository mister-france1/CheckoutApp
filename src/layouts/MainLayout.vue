<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="header">
      <div class="contentWrapper">
        <div class="content">
          <q-icon class="logo">
            <img src="~assets/logo.svg"/>
          </q-icon>
        </div>
      </div>
    </q-header>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
@import 'src/css/variables';

.header {
  height: 80px;
  background: #050824;

  .contentWrapper {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 50%;
    height: 100%;

    .content {
      margin: 0 60px 0 40px;
      width: 100%;
      max-width: 540px;

      .logo {
        width: 171px;
        height: 36px;
      }
    }
  }
}

@media screen and (max-width: $wideTablet) {
  .header {
    height: 58px;

    .contentWrapper {
      justify-content: center;
      width: 100%;
      .content {
        .logo {
          width: 133px;
          height: 28px;
        }
      }
    }
  }
}
</style>
