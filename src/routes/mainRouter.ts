import { Router } from "express";

const mainRouter = Router();

mainRouter.get("/ping", (req, res) => {
  res.json({ pong: true });
});
export default mainRouter;
