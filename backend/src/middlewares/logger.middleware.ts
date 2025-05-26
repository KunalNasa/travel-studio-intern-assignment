import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
/**
 * Sample middleware that logs only post requests for debugging. We can replace
 * console log with logger. This was added just for middleware demonstration 
 * purpose.   
 * source: https://docs.nestjs.com/middleware
 */
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(`[${req.method}] ${req.originalUrl}`);
    next(); 
  }
}