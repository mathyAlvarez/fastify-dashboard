import dotenv from "dotenv";
dotenv.config();
import Fastify from "fastify";
import cors from "@fastify/cors";
import { pool } from "./config/db";
import { registerAuthMiddleware } from "./middlewares/authenticate";
import routes from "./routes";
import jwt from "@fastify/jwt";

const fastify = Fastify({ logger: true });
fastify.register(cors, {
  origin: process.env.APP_HOST,
});

// Iniciar el servidor
const start = async () => {
  try {
    await fastify.register(jwt, { secret: process.env.JWT_SECRET as string });
    await fastify.register(routes);

    await fastify.listen({ port: parseInt(process.env.PORT ?? "3001") });

    console.log("Servidor corriendo en http://localhost:3001");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
