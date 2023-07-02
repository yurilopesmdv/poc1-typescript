import { Game, GameCreated } from "../protocols/index"
import * as gameRepository from "../repositories/game-repository"


export async function createGame(game: GameCreated) {
    const gameExists = await gameRepository.getGameByName(game.name)
    if(gameExists.rows.length > 0) throw {type: 'Conflict', message: 'Game already exists'}
    return gameRepository.createGame(game)
}

export async function getGames() {
    return gameRepository.getGames()
}

export async function updateGame(game: Game) {
    const gameExists = await gameRepository.getGameById(game.id)
    if(gameExists.rows.length > 0) throw {type: 'NotFound', message: 'Register not found'}
    return gameRepository.updateGame(game)
}

export async function deleteGame(id: Number) {
    const gameExists = await gameRepository.getGameById(id)
    if(gameExists.rows.length > 0) throw {type: 'NotFound', message: 'Register not found'}
    return gameRepository.deleteGame(id)
}