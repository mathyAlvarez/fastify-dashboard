import { FastifyInstance } from "fastify";
import usersRoutes from "./users";
import loginRoutes from "./login";

export default async function (fastify: FastifyInstance) {
  await fastify.register(usersRoutes, { prefix: "/users" });
  await fastify.register(loginRoutes, { prefix: "/login" });
}
