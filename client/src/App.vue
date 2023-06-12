<script setup lang="ts">
import './assets/stylesheets/colors.css'
import NavBar from './components/NavBar.vue'
import HomeView from './views/HomeView.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <NavBar />
  <HomeView></HomeView>
  <RouterView />
</template>

<style>
body {
  margin: 0;
  height: 100vh;
}
</style>
