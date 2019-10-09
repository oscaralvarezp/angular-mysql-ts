import { App } from "./app";

async function bootstrap() {
    const app = new App(3000);
    await app.listen();
}

bootstrap();