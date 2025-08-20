import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from 'application/Dto/create.user.dto';
import { UserModel } from 'domain/model/user.model';
import { UserUseCase } from 'domain/useCase/user.use.case';
@Injectable()
export class UserHandler {
  constructor(
    @Inject('UserUseCase') private readonly userUseCase: UserUseCase,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<UserModel> {
    return this.userUseCase.createUser(createUserDto);
  }
}
