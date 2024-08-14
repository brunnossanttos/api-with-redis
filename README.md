<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A <a href="http://nodejs.org" target="_blank">Node.js</a> API with <a href="https://www.prisma.io/" target="_blank">Prisma</a> and <a href="https://redis.io/" target="_blank">Redis</a> for cache concept studies.</p>
    <p align="center">

</p>

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript repository.

## Prerequisites

- Node.js (v14 or higher)
- Docker (for Redis)
- Prisma CLI (for database setup)

## Installation

```bash
$ npm install
```

## Setting Up the Database

```bash
# Initialize the Prisma database
$ npx prisma migrate deploy

# Run Seed Script:
$ npm run seed

# Running Redis using Docker
$ docker run --name redis-server -p 6379:6379 -d redis
```

## Running Project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
