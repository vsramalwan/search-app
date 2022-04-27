import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();
const port = process.env.SERVER_PORT || 8001;

app.get("/", (_req, res) => {
  res.send("Express Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});
