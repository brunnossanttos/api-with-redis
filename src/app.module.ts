import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RedisService } from 'shared/database/redis.service';
import { CacheService } from './cache.service';
import { PrismaService } from 'shared/database/prisma.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, CacheService, RedisService, PrismaService],
})
export class AppModule {}
