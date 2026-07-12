import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Injectable()
export class DatabaseService implements OnModuleInit {
  constructor(
    @InjectConnection()
    private readonly connection: Connection,
  ) {}

  onModuleInit() {
    console.log('Connection state:', this.connection.readyState);

    switch (this.connection.readyState) {
      case 0:
        console.log('❌ Disconnected');
        break;
      case 1:
        console.log('✅ Connected');
        break;
      case 2:
        console.log('🟡 Connecting');
        break;
      case 3:
        console.log('🔴 Disconnecting');
        break;
    }
  }
}