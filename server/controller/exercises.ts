import { Request, Response } from "express";
import { Connection, Query } from "../db.config";

const getExercise = async (_request: Request, response: Response) => {
  let query =
    "SELECT exerciseName, imgPath FROM exercises WHERE exerciseID = 'E01';";

  Connection()
    .then((connection) => {
      Query(connection, query)
        .then((result) => {
          console.log(result);
          return response.status(200).json(result);
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

export default { getExercise };
