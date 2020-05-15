import { serve } from "../deps.ts";
const s = serve({ port: 8000 });

console.log("http://localhost:8000/");

for await (const req of s) {
  console.log(req.url);
  req.respond({ body: "Hello World\n" });
}
