import express from "express";
import exercises from "../controller/exercises";
const exerciseRouter = express.Router();

exerciseRouter.get("/exercise", exercises.getExercise);

export default exerciseRouter;
