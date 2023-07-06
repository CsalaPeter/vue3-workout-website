export type Exercise = {
  exerciseID: string
  exerciseName: string
  imgPath: string
}

export type Workout = {
  workoutID: string
  workoutName: string
  exercises: [
    exercise: {
      exerciseName: string
      repetition: string
      imgPath: string
    }
  ]
}
