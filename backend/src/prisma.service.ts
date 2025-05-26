import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

/**
 * Code below is specific to nestJS prisma connection. Although we can use prisma client like we do in next/node js app but that's not a good way in nestjs.
 * source: https://docs.nestjs.com/recipes/prisma
 */
@Injectable() 
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  async onModuleInit() {
    await this.$connect(); 
  }

  async onModuleDestroy() {
    await this.$disconnect(); 
  }
}
