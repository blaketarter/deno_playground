import { Application } from "../deps.ts";

const app = new Application();
const port = 8080

app
  .get("/hello", (c) => {
    return "Hello, Abc!";
  })
  .start({ port });

console.log(`server listening on http://localhost:${port}`);