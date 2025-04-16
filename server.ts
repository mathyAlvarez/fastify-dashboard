import Fastify from "fastify";
import cors from "@fastify/cors";

const fastify = Fastify({ logger: true });

// Registrar CORS para que acepte peticiones desde el frontend
fastify.register(cors, {
  origin: "http://localhost:3000",
});

// Ruta simple
fastify.get("/api/saludo", async (request, reply) => {
  try {
    const res = await fetch("https://api.vercel.app/blog");
    const data = await res.json();

    return {
      data: data,
      error: null,
    };
  } catch (err) {
    return {
      data: null,
      error: "Error al obtener datos del backend",
    };
  }
});

// Iniciar el servidor
const start = async () => {
  try {
    await fastify.listen({ port: parseInt(process.env.PORT ?? "3001") });
    console.log("Servidor corriendo en http://localhost:3001");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
