import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { CreateUserDto } from 'application/Dto/create-user.dto';
import { loginDto } from 'application/Dto/login.dto';
import { AuthHandler } from 'application/Handler/auth.handler';
import { UserHandler } from 'application/Handler/user.handler';

@Controller()
export class UserController {
  constructor(
    private readonly userHandler: UserHandler,
    private readonly authHandler: AuthHandler,
  ) {}

  @Post('auth/login')
  @HttpCode(200)
  @ApiBody({ type: loginDto })
  async login(@Body() login: loginDto) {
    return await this.authHandler.login(login);
  }
  @Post('auth/register')
  @ApiBody({ type: CreateUserDto })
  async register(@Body() createUserDto: CreateUserDto) {
    return await this.authHandler.register(createUserDto);
  }
}
