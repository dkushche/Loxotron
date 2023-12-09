import { NestFactory } from "@nestjs/core";
import { AppModule } from "./modules/app.module";
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as cookieParser from "cookie-parser";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser());

  const port = process.env.PORT ?? 7000;

  const config = new DocumentBuilder()
    .setTitle('L0x0tron API')
    .setDescription('Loxotron API handles users authentication ' +
                    'and ability to spin a wheel')
    .setVersion('0.1')
    .addTag('loxotron_api')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(port);
}

bootstrap();
