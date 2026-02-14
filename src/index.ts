import express from "express";
import cors from "cors";
import mainRouter from "./routes/mainRouter.js";

const server = express();
const PORT = 3000;

server.use(cors());
server.use(express.json());

server.use(mainRouter);

server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
