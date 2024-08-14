import { Injectable } from '@nestjs/common';
import { AppService } from './app.service';
import { RedisService } from 'shared/database/redis.service';
import { PrismaService } from 'shared/database/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class CacheService implements Partial<AppService> {
  constructor(
    private readonly redis: RedisService,
    private readonly prisma: PrismaService<User>,
  ) {}

  async getUsers(): Promise<any> {
    const cachedUsers = await this.redis.get('users');

    if (!cachedUsers) {
      const users = await this.prisma.user.findMany();

      await this.redis.set('users', JSON.stringify(users), 'EX', 15);

      console.log(
        '\x1b[36m%s\x1b[0m',
        '🚀 ~ CacheService ~ getUsers ~ FROM DATABASE:',
      );

      return users;
    }
    console.log(
      '\x1b[33m%s\x1b[0m',
      '🚀 ~ CacheService ~ getUsers ~ FROM CACHE:',
    );

    return JSON.parse(cachedUsers);
  }
}
