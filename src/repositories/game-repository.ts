import { db } from "../database/db.connection";
import { GameCreated } from "../protocols/index";

export async function createGame(game: GameCreated) {
    return db.query(`INSERT INTO games (name, price) VALUES ($1, $2);`, [game.name, game.price])
}

export async function getGames() {
    return db.query(`SELECT * FROM games;`)
}

export function getGameById(id: Number) {
    return db.query("SELECT * FROM games WHERE id = $1", [id])
}

export function getGameByName(name: string) {
    return db.query("SELECT * FROM games WHERE name = $1", [name])
}

export function updateGame({id, name, price}) {
    return db.query(`
        UPDATE games SET , name=$2, price=$3 WHERE id=$1;
    `, [id, name, price])
}

export function deleteGame(id: Number){
    return db.query(`
        DELETE FROM games WHERE id=$1;
    `, [id])
}