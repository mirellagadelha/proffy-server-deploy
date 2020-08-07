import { Controller, Get, Post, Body, ParseIntPipe } from '@nestjs/common';
import { ConnectionsService } from './connections.service';

@Controller('connections')
export class ConnectionsController {
  constructor(private connectionsService : ConnectionsService){}

  @Get()
  totalConnections(): Promise<number>{
    return this.connectionsService.totalConnections();
  }

  @Post()
  createConnection(
    @Body('user_id', ParseIntPipe) user_id: number
  ): Promise<void> {
    return this.connectionsService.createConnection(user_id);
  }
}
