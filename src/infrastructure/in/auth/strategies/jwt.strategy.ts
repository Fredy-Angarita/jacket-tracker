import { PassportStrategy } from '@nestjs/passport';
import { UserHandler } from 'application/Handler/user.handler';
import { ExtractJwt, Strategy } from 'passport-jwt';
import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { secret } from '../config/auth.source';
import { JwtPayload } from '../interfaces/jwt.payload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userHandler: UserHandler) {
    if (!secret) {
      throw new NotFoundException(
        'SECRET is not defined in environment variables',
      );
    }
    super({
      secretOrKey: secret,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }
  async validate(payload: JwtPayload) {
    const { sub } = payload;
    const user = await this.userHandler.getUserByID(sub);
    if (!user) throw new UnauthorizedException('Invalid token');
    return {
      id: user.id,
      username: user.username,
      email: user.email,
    };
  }
}
