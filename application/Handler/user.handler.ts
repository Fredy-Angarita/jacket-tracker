import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from 'application/Dto/create-user.dto';
import { UserModel } from 'domain/model/user.model';
import { UserUseCase } from 'domain/useCase/user.use.case';
@Injectable()
export class UserHandler {
  constructor(
    @Inject('UserUseCase') private readonly userUseCase: UserUseCase,
  ) {}
  async getUserByID(id: string): Promise<UserModel | null> {
    return this.userUseCase.getUserByID(id);
  }
}
