import { Request, Response } from "express";
import { Controller, Get } from "@overnightjs/core";

@Controller('')
export class IndexController {

    @Get('')
    getMessage(req: Request, res: Response) {
        return res.status(200).json({
            "StatusCode": 200,
            "Message": "API in: api/games"
        });
    }
}