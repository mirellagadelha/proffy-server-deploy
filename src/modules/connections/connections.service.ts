import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Connection } from './entities/connection.entity';
import { ConnectionRepository } from './connection.repository';

@Injectable()
export class ConnectionsService {
  constructor(
    @InjectRepository(Connection)
    private connectionsRepository: ConnectionRepository
  ){}

  async totalConnections(): Promise<number>{
    return await this.connectionsRepository.totalConnections();
  }
}
