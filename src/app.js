import express from "express";
import dotenv from "dotenv";
const app = express();
app.use(express.json({ limit: "16kb" }));

app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("API is running...");
});

export { app };
