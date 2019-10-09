import * as bodyParser from 'body-parser';

import { IndexController } from './index/index.controller';
import { GamesController } from './games/games.controller';
import { Server } from "@overnightjs/core";

import morgan from "morgan";
import cors from "cors";

export class App extends Server {
    constructor(private port: string | number) {
        super(true);
        this.settings();
        this.middlewares();
        this.setupControllers();
    }

    private settings() {
        this.app.set('port', this.port || process.env.PORT || 3000);
    }

    private middlewares() {
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: true}));
    }

    private setupControllers() {
        const indexController = new IndexController();
        const gamesController = new GamesController();
        super.addControllers([indexController, gamesController]);
    }

    public async listen() {
        await this.app.listen(this.app.get('port'));
        console.log('Server on port: ', this.app.get('port'));
    }
}