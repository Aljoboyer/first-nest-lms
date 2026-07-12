import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DatabaseService } from './database.service';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],

      inject: [ConfigService],

      useFactory: async (config: ConfigService) => ({
        uri: config.get<string>('MONGODB_URI'),

        maxPoolSize: 20,

        minPoolSize: 5,

        autoIndex: false,

        serverSelectionTimeoutMS: 5000,

        socketTimeoutMS: 45000,
      }),
    }),
  ],
  providers: [DatabaseService],
})
export class DatabaseModule {}