import { Application, HandlerFunc } from "../deps.ts";
const app = new Application();
const port = 8080

interface User {
  id: string
}

const users: Map<string, User> = new Map()

const findAllUsers: HandlerFunc = c => {
  return Array.from(users.values());
};

const findOneUser: HandlerFunc = c => {
  const { id } = c.params;

  return users.get(String(id))
};

const createOneUser: HandlerFunc = async c => {
  const user = await c.body();

  users.set(String(user.id), user as unknown as User)

  return user
};

const deleteOneUser: HandlerFunc = c => {
  const { id } = c.params;

  users.delete(String(id))

  return undefined
};

app
  .get("/users/", findAllUsers)
  .get("/users/:id", findOneUser)
  .post("/users/", createOneUser)
  .delete("/users/:id", deleteOneUser)
  .start({ port });

console.log(`server listening on http://localhost:${port}`);