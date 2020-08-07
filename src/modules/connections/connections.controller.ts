import { Controller, Get } from '@nestjs/common';
import { ConnectionsService } from './connections.service';

@Controller('connections')
export class ConnectionsController {
  constructor(private connectionsService : ConnectionsService){}

  @Get()
  totalConnections(): Promise<number>{
    return this.connectionsService.totalConnections();
  }
}
