import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ConnectionsController } from './connections.controller';
import { ConnectionsService } from './connections.service';
import { ConnectionRepository } from './connection.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ConnectionRepository
    ])
  ],
  controllers: [ConnectionsController],
  providers: [ConnectionsService]
})
export class ConnectionsModule {}
