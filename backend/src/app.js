import express from "express";
import tripRoutes from "./routes/tripRoutes.js";

const app = express();

app.use(express.json());

app.use("/api", tripRoutes);

export default app;