import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { HashService } from './hash/hash.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { AuthGuard } from './auth.guard';
import { RolesGuard } from './roles.guard';

@Module({
  imports: [
    UserModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        global: true,
        secret: config.get<string>('SECRETKEY'),
        signOptions: {
          expiresIn: '1h',
        },
      }),
    }),

  ],
  controllers: [AuthController],
  providers: [AuthService, HashService, AuthGuard, RolesGuard],
  exports: [
    JwtModule,
    AuthGuard,
    RolesGuard,
  ],
})
export class AuthModule {}
