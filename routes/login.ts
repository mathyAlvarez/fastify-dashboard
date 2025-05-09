import { FastifyInstance } from "fastify";
import { getLogin } from "../controllers/loginController";

export default async function (fastify: FastifyInstance) {
  fastify.post("/getLogin", getLogin);
}
