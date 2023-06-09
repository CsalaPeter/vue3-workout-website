<script setup lang="ts">
import '../assets/stylesheets/colors.css'
</script>

<template>
  <header>
    <div class="logo">
      <img src="/logo.png" alt="Logo" />
    </div>
    <nav>
      <ul>
        <li>Workout</li>
        <li>Programs</li>
        <li>Challenges</li>
      </ul>
    </nav>
  </header>
</template>

<style>
.logo img {
  height: 70px;
}
header {
  height: 70px;
  width: 1200px;
  margin: 0 auto;
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
</style>
