import { Request, Response } from "express";
import { Connection, Query } from "../db.config";

const getWorkouts = async (_request: Request, response: Response) => {
  let query =
    "SELECT workoutName, repetition, GROUP_CONCAT(e.exerciseName SEPARATOR ', ') as exerciseName, GROUP_CONCAT(e.imgPath SEPARATOR ', ') as imgPath  FROM workouts w " +
    "JOIN workout_exercise we ON we.workoutID = w.workoutID " +
    "JOIN exercises e ON e.exerciseID  = we.exerciseID; ";

  Connection()
    .then((connection) => {
      Query(connection, query)
        .then((result: any) => {
          let imgPath: [""] = result[0].imgPath.split(", ");
          let repetition: [""] = result[0].repetition.split(", ");
          let exerciseName: [""] = result[0].exerciseName.split(", ");
          let exercises: [{}] = [{}];
          let workout: { workoutName: ""; exercises: {} } = {
            workoutName: result[0].workoutName,
            exercises: exercises,
          };

          for (let i = 0; i < exerciseName.length; i++) {
            exercises.push({
              imgPath: imgPath[i],
              repetition: repetition[i],
              exerciseName: exerciseName[i],
            });
          }
          exercises.shift();
          console.log(workout);

          return response.status(200).json(workout);
        })
        .catch((error) => {
          console.log(error);
          return response.status(400).json({
            message: error.message,
            error,
          });
        })
        .finally(() => {
          console.log("Closing connection.");
        });
    })
    .catch((error) => {
      console.log(error);
      return response.status(500).json({
        message: error.message,
        error,
      });
    });
};

export default { getWorkouts };
