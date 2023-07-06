<script setup lang="ts">
import '../assets/stylesheets/colors.css'
import axios from 'axios'
import { ref, onMounted } from 'vue'
import type { Workout } from '../util/Types'
import WorkoutLayout from '@/components/WorkoutLayout.vue'

const workouts = ref<Workout>({
  workoutID: '',
  workoutName: '',
  exercises: [
    {
      exerciseName: '',
      repetition: '',
      imgPath: ''
    }
  ]
})

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
      <WorkoutLayout>
        <template #header>
          <h1>{{ workouts.workoutName }}</h1>
        </template>

        <template #details>
          <h3>5 sets with 2 min rest between</h3>
        </template>

        <template #exercise>
          <div v-for="(exercise, index) in workouts.exercises" :key="index">
            <img class="exercise-img" :src="exercise.imgPath" />
            <p>{{ exercise.repetition }} {{ exercise.exerciseName }}</p>
          </div>
        </template>
      </WorkoutLayout>
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
}

.workout-list {
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  height: 100vh;
}
</style>
