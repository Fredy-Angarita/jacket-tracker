import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from 'application/Dto/create-user.dto';
import { AuthUseCase } from 'domain/useCase/auth.use.case';

@Injectable()
export class AuthHandler {
  constructor(
    @Inject('AuthUseCase') private readonly authUseCase: AuthUseCase,
  ) {}

  async register(userDto: CreateUserDto) {
    return this.authUseCase.register(userDto);
  }
}
