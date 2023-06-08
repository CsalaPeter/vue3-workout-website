import express, { Express } from "express";

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use("/api");

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
