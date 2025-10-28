import { Module } from '@nestjs/common';
import { DatabaseModule } from './infrastructure/out/database/database.module';
import { UserController } from './infrastructure/in/http/user.controller';
import { UserHandler } from 'application/Handler/user.handler';
import { UserUseCase } from 'domain/useCase/user.use.case';
import { UserRepository } from './infrastructure/out/database/repository/user.repository';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './infrastructure/in/auth/strategies/jwt.strategy';

@Module({
  imports: [
    DatabaseModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.SECRET,
      signOptions: { expiresIn: '3d' },
    }),
  ],
  controllers: [UserController],
  providers: [
    UserHandler,
    JwtStrategy,
    {
      provide: 'UserUseCase',
      useFactory: (userPersistencePort) => new UserUseCase(userPersistencePort),
      inject: [UserRepository],
    },
  ],
})
export class AppModule {}
