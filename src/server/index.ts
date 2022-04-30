import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();
const port = process.env.SERVER_PORT || 8001;

app.get("/", (_req, res) => {
  res.send("Express Server");
});

app.get("/companies", (_req, res) => {
  res.send(["abc", "xyz"]);
});

app.get("/api", (_req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});
