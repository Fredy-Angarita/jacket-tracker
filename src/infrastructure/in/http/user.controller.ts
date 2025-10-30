import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { CreateUserDto } from 'application/Dto/create-user.dto';
import { AuthHandler } from 'application/Handler/auth.handler';
import { UserHandler } from 'application/Handler/user.handler';

@Controller()
export class UserController {
  constructor(
    private readonly userHandler: UserHandler,
    private readonly authHandler: AuthHandler,
  ) {}

  @Post('auth/register')
  @ApiBody({ type: CreateUserDto })
  async createUser(@Body() createUserDto: CreateUserDto) {
    return await this.authHandler.register(createUserDto);
  }
}
