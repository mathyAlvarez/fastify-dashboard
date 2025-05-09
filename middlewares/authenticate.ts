import { FastifyInstance } from "fastify";

// auth to private routes middlewares
export async function registerAuthMiddleware(fastify: FastifyInstance) {
  fastify.decorate("authenticate", async function (request: any, reply: any) {
    try {
      await request.jwtVerify();
    } catch (err) {
      reply.code(401).send({ message: "No autorizado" });
    }
  });
}
