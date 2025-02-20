import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cacheRouter from "./routes/cache.routes.js";
const app = express();

dotenv.config();

app.use(express.json({ limit: "16kb" }));

app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.use(express.static("public"));

app.use("/cache", cacheRouter);

app.get("/", (req, res) => {
  res.send("API is running...");
});

export { app };
