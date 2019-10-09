import { mysqlConnection } from '../database'
import { Game } from "./interfaces/Games.interface";

export class GameService {

    async getGames() {
        const conn = await mysqlConnection();
        const games = await conn.query('SELECT * FROM games');
        return games[0];
    }

    async getGame(id: string | number) {
        const conn = await mysqlConnection();
        const game = await conn.query('SELECT * FROM games WHERE id = ?', [id]);
        return game[0];
    }

    async createGame(game: Game) {
        const conn = await mysqlConnection();
        const gameCreated = await conn.query('INSERT INTO games SET ?', [game]);
        return gameCreated;
    }
    
    async deleteGame(id: string) {
        const conn = await mysqlConnection();
        const gameDeleted = await conn.query('DELETE FROM games WHERE id = ?', [id]);
        return gameDeleted;
    }

    async updateGame(id: string, game: Game) {
        const conn = await mysqlConnection();
        const gameUpdated = await conn.query('UPDATE games SET ? WHERE id = ?', [game, id]);
        return gameUpdated;
    }
}