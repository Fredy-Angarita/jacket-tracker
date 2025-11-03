import {
  createParamDecorator,
  ExecutionContext,
  InternalServerErrorException,
} from '@nestjs/common';
import { UserValidate } from '../interfaces/user.validate.interface';

export const GetUser = createParamDecorator<
  keyof UserValidate | undefined,
  UserValidate | String
>((data: keyof UserValidate, ctx: ExecutionContext) => {
  const req = ctx.switchToHttp().getRequest();
  const user = req.user as UserValidate;
  if (!user) throw new InternalServerErrorException('User not found (request)');
  return data ? user[data] : user;
});
