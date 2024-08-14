import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { CacheService } from './cache.service';

@Injectable()
export class AppService {
  constructor(private cacheService: CacheService) {}
  getHello(): string {
    return 'Hello World!';
  }

  async getUsers(): Promise<User[]> {
    return await this.cacheService.getUsers();
  }
}
