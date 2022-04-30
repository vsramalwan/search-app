import dotenv from "dotenv";
import jsonServer from "json-server";
import path from "path";

dotenv.config();

const port = process.env.SERVER_PORT || 8001;

const server = jsonServer.create();
const router = jsonServer.router(
  path.join(__dirname, "./../../fixtures/db.json")
);
const middlewares = jsonServer.defaults();

server.use(jsonServer.defaults());
server.use(middlewares);
server.use(router);

server.use(
  jsonServer.rewriter({
    "/api/*": "/$1",
  })
);

server.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});
