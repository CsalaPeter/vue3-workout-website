import express, { Express } from "express";
import exerciseRouter from "./routes/exercisesRoutes";
import workoutsRouter from "./routes/workoutsRoutes";

const app: Express = express();
const port = process.env.PORT || 3001;
let routers = [exerciseRouter, workoutsRouter];

app.use(express.json());
app.use("/api", ...routers);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
