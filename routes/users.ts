import { FastifyInstance } from "fastify";
import { getUsers, insertUsers } from "../controllers/usersController";

export default async function (fastify: FastifyInstance) {
  fastify.get("/getUsers", getUsers);
  fastify.post("/insertUsers", insertUsers);
}
