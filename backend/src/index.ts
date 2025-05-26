
import 'reflect-metadata'; // Enables metadata reflection for decorators (used by NestJS and TypeORM)
import { NestFactory } from '@nestjs/core'; // Factory to create a NestJS application instance
import { RequestModule } from './routes/requests'; // Root module for handling request routes
import { AllExceptionsFilter } from './exceptionFilter';

/**
 * Bootstraps the NestJS application.
 * source: https://docs.nestjs.com/first-steps
 */
async function bootstrap() {
  const app = await NestFactory.create(RequestModule); 
  app.enableCors({
    origin: 'http://localhost:3000',
    methods: ['GET'],
  });
  app.setGlobalPrefix('api'); 
  app.useGlobalFilters(new AllExceptionsFilter());
  const port = process.env.PORT || 4000; 
  console.log(`Server running on http://localhost:${port}`); 
  await app.listen(port); 
}

bootstrap(); 
