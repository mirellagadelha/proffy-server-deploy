import { Module } from '@nestjs/common';
import typeOrmConfig from './config/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersModule } from './modules/users/users.module';
import { LessonsModule } from './modules/lessons/lessons.module';
import { ConnectionsModule } from './modules/connections/connections.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    UsersModule,
    LessonsModule,
    ConnectionsModule,
  ],
})
export class AppModule {}