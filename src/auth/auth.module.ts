import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { HashService } from './hash/hash.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [UserModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET || 'defaultSecret',
      signOptions: { expiresIn: '60s' },
    }),

  ],
  controllers: [AuthController],
  providers: [AuthService, HashService],
})
export class AuthModule {}
