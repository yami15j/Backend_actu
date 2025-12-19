import { NestFactory } from '@nestjs/core'; 
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*',
  });

  // AGREGA ESTA LÍNEA:
  app.setGlobalPrefix('api'); 

  const PORT = 3001;
  await app.listen(PORT);

  console.log(`🚀 Backend Nest corriendo en http://localhost:${PORT}/api`);
}
bootstrap();