<script setup lang="ts">
import '../assets/stylesheets/colors.css'
import axios from 'axios'
import type { Exercise } from '../util/Types'
import { ref, onMounted } from 'vue'

const exercise = ref<Exercise>({
  exerciseID: '',
  exerciseName: '',
  imgPath: ''
})

onMounted(() => {
  axios.get('/api/exercise').then((response) => {
    console.log(response.data)
    exercise.value = response.data[0]
  })
})
</script>

<template>
  <div class="homepage">
    <section class="homepage-top">
      <div class="daily">
        <h2>Execise of the day</h2>
        <img :src="exercise.imgPath" />
        <p>50</p>
        <p>{{ exercise.exerciseName }}</p>
      </div>
      <div class="daily-workout"></div>
      <div class="monthly"></div>
    </section>

    <footer>
      <a href="https://github.com/CsalaPeter/vue3-workout-website">
        <img className="github" alt="GitHub" />
      </a>
      <a href="https://www.linkedin.com/in/péter-csala-553b6622b/">
        <img className="linkedin" alt="LinkedIn" />
      </a>
    </footer>
  </div>
</template>

<style>
.homepage {
  max-width: 1215px;
  margin: auto;
  height: 100%;
}
.homepage-top {
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}

.daily {
  grid-row-start: span 2;
  grid-column-start: 1;
  grid-column-end: 2;
}

.daily h2 {
  padding-top: 20px;
  text-align: center;
}

.daily p:first-of-type {
  text-align: center;
  font-weight: bold;
  font-size: 2.5rem;
}

.daily p:last-of-type {
  text-align: center;
  font-size: 1.2rem;
}

.daily p {
  margin: 0;
}

.daily img {
  margin: 50px;
  width: 500px;
}

.daily-workout {
  height: 300px;
  width: 600px;
  grid-row-start: 1;
  grid-column-start: 2;
  grid-row-end: 1;
  grid-column-end: 2;
}

.monthly {
  height: 300px;
  width: 600px;
  grid-row-start: 2;
  grid-column-start: 2;
  grid-row-end: 2;
  grid-column-end: 2;
}

.daily,
.daily-workout,
.monthly {
  background-color: aliceblue;
  border-radius: 10px;
}

footer {
  padding: 2rem 0 1rem 0;
  text-align: center;
  bottom: 0;
  position: static;
  width: 1215px;
}

.github {
  content: url(/GitHub-Mark-32px.png);
  display: inline-block;
}

.linkedin {
  content: url(/Linked-In-32px.png);
  margin-left: 10px;
}
</style>
