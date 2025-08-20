import { Controller, Post } from '@nestjs/common';
import type { CreateUserDto } from 'application/Dto/create.user.dto';
import { UserHandler } from 'application/Handler/user.handler';

@Controller('user')
export class UserController {
  constructor(private readonly userHandler: UserHandler) {}

  @Post()
  async createUser(createUserDto: CreateUserDto) {
    return this.userHandler.createUser(createUserDto);
  }
}
