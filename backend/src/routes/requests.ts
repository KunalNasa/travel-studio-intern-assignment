import 'reflect-metadata';
import { Module, Controller, Get, Post, Body, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { LoggerMiddleware } from '../middlewares/logger.middleware';
import { PrismaService } from '../prisma.service';
import { PrismaModule } from '../prisma.module';
import { ApiResponse } from '../interfaces/ApiResponse';

dotenv.config();

@Controller('requests')
export class RequestController {
  constructor(private readonly prisma: PrismaService) {}
  /**
    * GET /requests
    * @returns {Promise<any>} List of all request records from the database
  */
  @Get()
  async getAllRequests(): Promise<any> {
    try {
        const allRequestInDb = await this.prisma.requests.findMany({
            where: {
                status: "pending"
            }
        });

        const respone: ApiResponse<typeof allRequestInDb> = {
            message: "All requests fetched from DB",
            data: allRequestInDb
        }

        return respone;
    } catch (error:any) {
        throw new Error(error.message);
    }
  }

  /**
     * POST /requests
     * @param {any} body - Request body containing `Body` (message text) and `WaId` (guest phone number)
     * @returns {Promise<any>} If success returns API response
     * @throws error to the exception filter if exception occured.
     * 
  */
  @Post()
  async postRequest(@Body() body: any): Promise<any> {
    try {
        const { Body: requestText, WaId } = body;
        if(!requestText || !WaId){
            throw new Error("Bad Request");
        }
        
        const guestPhone = "+" + WaId;
        await this.prisma.requests.create({
          data: {
            guestPhone,
            requestText,
          },
        });
        type resType = {
            text: string,
            phone: string
        }
        const response : ApiResponse<resType> = {
            message: "Request logged to the DB successfully",
            data : {
                text: requestText,
                phone: guestPhone
            }
        };
        return response;
    } catch (error: any) {
        throw new Error(error.message);
    }
  }
}

@Module({
    imports: [PrismaModule], // import Prisma DI
    controllers: [RequestController],
  })

  export class RequestModule implements NestModule {
    /**
      * Applies middleware to specific routes
      * @param {MiddlewareConsumer} consumer - Middleware consumer for configuring route-specific middleware
   */
    configure(consumer: MiddlewareConsumer) {
      consumer
        .apply(LoggerMiddleware)
        .forRoutes({ path: 'requests', method: RequestMethod.POST });
    }
  }