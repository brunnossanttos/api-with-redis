import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { prisma } from './db';

@Injectable()
export class PrismaService<T> extends PrismaClient implements OnModuleInit {
  private entity: { new (): T };
  private entityName: string;

  constructor() {
    super();
    this.entityName = this.entity?.name?.toLowerCase();
  }
  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }

  async findMany(params?: any): Promise<T[]> {
    return prisma[this.entityName].findMany(params);
  }
}
