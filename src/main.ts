import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Configuración de Swagger
  const config = new DocumentBuilder()
    .setTitle('API Carrito Compras')
    .setDescription('Documentación de la API con Swagger')
    .setVersion(require('../package.json').version)
    // Puedes añadir tags para agrupar endpoints
    .build();

  app.enableCors({
    origin: '*', // Permitir todos los dominios
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Permitir cookies (opcional)
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // 'api' es el endpoint donde estará Swagger

  await app.listen(3000);
}
bootstrap();
