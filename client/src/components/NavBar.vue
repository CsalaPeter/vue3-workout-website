<script setup lang="ts">
import '../assets/stylesheets/colors.css'
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="navbar">
    <div class="logo">
      <RouterLink to="/"><span>Fit Bird</span></RouterLink>
    </div>
    <nav>
      <ul>
        <RouterLink to="/workouts"><li>Workouts</li></RouterLink>
        <li>Programs</li>
        <li>Challenges</li>
      </ul>
    </nav>
  </header>
</template>

<style>
.logo span {
  font-weight: bold;
  font-size: 1.5rem;
  background-color: var(--primary);
  color: white;
  padding-block: 8px;
  padding-inline: 20px;
}
.navbar {
  height: 70px;
  width: 1200px;
  margin: 0 auto;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

li {
  list-style: none;
  padding: 5px 20px;
  border: 2px solid var(--primary);
  color: var(--primary);
  font-size: 1.2rem;
}

li:hover {
  cursor: pointer;
  box-shadow: var(--default-glow);
}

li:last-child {
  margin-right: 20px;
}

ul {
  display: flex;
  gap: 25px;
}

ul a {
  text-decoration: none;
}
</style>
