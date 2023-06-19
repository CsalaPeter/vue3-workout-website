import express from "express";
import workouts from "../controller/workouts";
const workoutsRouter = express.Router();

workoutsRouter.get("/workouts", workouts.getWorkouts);

export default workoutsRouter;
