import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSourceConfig } from './config/data.source';
import { UserRepository } from './repository/user.repository';
import { UserEntity } from './entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(DataSourceConfig),
    TypeOrmModule.forFeature([UserEntity]),
  ],
  exports: [TypeOrmModule, UserRepository],
  providers: [UserRepository],
})
export class DatabaseModule {}
