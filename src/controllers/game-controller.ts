import { Request, Response } from "express";
import { Game, GameCreated } from "../protocols/index";
import * as gameService from "../services/game-service"
import httpStatus from "http-status";

export async function createGame(req: Request, res: Response) {
    const gameCreate = req.body as GameCreated
    await gameService.createGame(gameCreate)
    return res.sendStatus(httpStatus.CREATED)
}

export async function getGames(req: Request, res: Response) {
    const games = await gameService.getGames()
    return res.status(httpStatus.OK).send(games.rows)
}

export async function updateGame(req: Request, res: Response) {
    const gameUpdate = req.body as Game
    await gameService.updateGame(gameUpdate)
    return res.sendStatus(httpStatus.OK)
}

export async function deleteGame(req: Request, res: Response) {
    const id: Number = Number(req.params.id)
    await gameService.deleteGame(id)
    return res.sendStatus(httpStatus.OK)
}