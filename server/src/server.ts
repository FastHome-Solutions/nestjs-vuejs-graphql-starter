import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix('api');

    const options = new DocumentBuilder()
        .setTitle('Offer Catalog API')
        .setDescription('Here comes the description of the Offer Catalog API    ')
        .setVersion('1.0')
        .addTag('offer-catalog')
        .setBasePath('api')
        .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('/api/swagger', app, document);

    await app.listen(process.env.SERVER_PORT ? parseInt(process.env.SERVER_PORT, 10) : 8080);
}

bootstrap();
