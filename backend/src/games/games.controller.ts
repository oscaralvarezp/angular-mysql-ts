import { Request, Response } from "express";
import { Controller, Get, Post, Delete, Put } from "@overnightjs/core";

import { GameService } from "./game.service";

@Controller('api')
export class GamesController {

    private gameService = new GameService();

    @Get('games')
    async getGames(req: Request, res: Response) {
        const games = await this.gameService.getGames();
        return res.status(200).json(games);
    }

    @Get('games/:id')
    async getGame(req: Request, res: Response) {
        const game = await this.gameService.getGame(req.params.id);
        return res.status(200).json(game);
    }

    @Post('games')
    async createGame(req: Request, res: Response) {
        await this.gameService.createGame(req.body);
        return res.status(200).json({
            "message": "Game Created Successfully"
        });
    }

    @Delete('games/:id')
    async deleteGame(req: Request, res: Response) {
        await this.gameService.deleteGame(req.params.id);
        return res.status(200).json({
            "message": `Game ${req.params.id} Deleted`
        });
    }

    @Put('games/:id')
    async updateGame(req: Request, res :Response){
        await this.gameService.updateGame(req.params.id, req.body);
        return res.status(200).json({
            "message": `Game ${req.params.id} Updated Successfully`
        });
    }
}