import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { CreateUserDto } from 'application/Dto/create-user.dto';
import { UserHandler } from 'application/Handler/user.handler';

@Controller('user')
export class UserController {
  constructor(private readonly userHandler: UserHandler) {}

  @Post()
  @ApiBody({ type: CreateUserDto })
  async createUser(@Body() createUserDto: CreateUserDto) {
    return await this.userHandler.createUser(createUserDto);
  }
}
