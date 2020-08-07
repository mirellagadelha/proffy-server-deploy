import { Repository, } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';

import { Connection } from './entities/connection.entity';

@EntityRepository(Connection)
export class ConnectionRepository extends Repository<Connection> {
  async totalConnections(): Promise<number>{
    return 10;
  }
}