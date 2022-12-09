import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {JwtAuthGuard} from "./auth/jwt-auth.guard";

async function start() {
  const PORT = process.env.PORT || 666;
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('electron-app')
    .setDescription('notion/obsidian clone')
    .setVersion('1.0.0')
    .addTag('electron-app-etoyadadaya')
    .build()
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);

  await app.listen(PORT, () => console.log(`server started on port: ${PORT}`));
}

start();