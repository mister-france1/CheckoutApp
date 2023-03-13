<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="header">
      <q-icon class="logo">
        <img src="~assets/logo.svg" />
      </q-icon>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
 .header {
   height: 80px;
   background: #050824;

   .logo {
     position: absolute;
     width: 171px;
     height: 36px;
     left: 405px;
     top: 22px;
   }
 }
</style>
