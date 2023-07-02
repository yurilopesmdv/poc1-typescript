import { Router } from "express";
import * as gameController from "../controllers/game-controller"
import { validateGame } from "../middlewares/game-middleware";
import schema from "../schemas/game-schema";
import { errorHandler } from "../middlewares/error.middleware";

const gameRouter = Router()
gameRouter.get("/games", gameController.getGames)
gameRouter.post("/games",validateGame(schema.gameCreatedSchema), gameController.createGame)
gameRouter.put("/games/:id", validateGame(schema.gameCreatedSchema), gameController.updateGame)
gameRouter.delete("/games/:id", gameController.deleteGame)
gameRouter.use(errorHandler)

export default gameRouter