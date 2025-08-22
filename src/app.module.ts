import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './infrastructure/out/database/database.module';
import { UserController } from './infrastructure/in/http/user.controller';
import { UserHandler } from 'application/Handler/user.handler';
import { UserUseCase } from 'domain/useCase/user.use-case';
import { UserRepository } from './infrastructure/out/database/repository/user.repository';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController, UserController],
  providers: [
    AppService,
    UserHandler,
    {
      provide: 'UserUseCase',
      useFactory: (userPersistencePort) => new UserUseCase(userPersistencePort),
      inject: [UserRepository],
    },
  ],
})
export class AppModule {}
