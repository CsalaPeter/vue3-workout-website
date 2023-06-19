<script setup lang="ts">
import '../assets/stylesheets/colors.css'
import axios from 'axios'
import { ref, onMounted } from 'vue'
import type { Workout } from '../util/Types'

const workouts = ref<Workout[]>([])

onMounted(() => {
  axios.get('/api/workouts').then((response) => {
    console.log(response.data)
    workouts.value = response.data
  })
})
</script>

<template>
  <div class="workout-page">
    <h1>Workouts</h1>
    <div class="workout-list">
      <div class="workout" v-for="(workout, index) in workouts" :key="index">
        <img :src="workout.imgPath" />
      </div>
    </div>
  </div>
</template>

<style>
.workout-page {
  max-width: 1215px;
  margin: auto;
  height: 100%;
  background-color: aliceblue;
  border-radius: 15px;
}

h1 {
  text-align: center;
  padding-top: 20px;
}

.workout-list {
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  height: 100vh;
}

.workout-list img {
  width: 300px;
}

.workout {
  height: 450px;
}
</style>
