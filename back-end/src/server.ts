import { fastify } from "fastify";
import { fastifyCors } from "@fastify/cors";
import { gettingUrl } from "./routes/gettingUrl";

const app = fastify();

app.register(fastifyCors, {
  origin: "*",
});

app.register(gettingUrl);

app.listen({
  port: 3000,
}).then(() => {
  ("Servidor rodando no localhost:3000!");
});