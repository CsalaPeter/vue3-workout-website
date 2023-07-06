<template>
  <div class="workout-card">
    <header class="workout-header">
      <slot name="header"></slot>
      <slot name="details"></slot>
    </header>
    <main>
      <div class="exercises">
        <slot name="exercise"></slot>
      </div>
    </main>
  </div>
</template>

<style>
.workout-card {
  height: 450px;
  width: 310px;
  background-color: hsl(240, 50%, 99%);
  border-radius: 10px;
  padding-inline: 10px;
}

.workout-header h3 {
  font-size: small;
  text-align: center;
}

main .exercises {
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: 5px;
  height: 100%;
}

main .exercise-img {
  width: 80px;
  height: 100px;
}

.exercises p {
  font-size: x-small;
  text-align: center;
  margin: 0;
}
</style>
