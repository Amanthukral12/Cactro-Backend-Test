import dotenv from "dotenv";
import { app } from "./app.js";

dotenv.config();

app.listen(8000, () => {
  console.log("Server is running at 8000");
});
