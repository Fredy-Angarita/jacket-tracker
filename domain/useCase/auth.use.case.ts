import { BadRequestException, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare, hash } from 'bcrypt';
import { ERROR_CONSTANTS } from 'domain/constants/error.constant';
import { AlreadyExistsException } from 'domain/exceptions/already-exists.exception';
import { LoginModel } from 'domain/model/login.model';
import { AuthResponse } from 'domain/model/response/auth.response';
import { UserModel } from 'domain/model/user.model';
import { IUserPersistencePort } from 'domain/spi/IUserPersistencePort';

export class AuthUseCase {
  constructor(
    private readonly userPersistencePort: IUserPersistencePort,
    private readonly jwt: JwtService,
  ) {}
  async login(loginRequest: LoginModel) {
    const user = await this.userPersistencePort.getUserByEmail(
      loginRequest.email,
    );
    if (!user) {
      throw new NotFoundException(ERROR_CONSTANTS.USER_NOT_FOUND);
    }
    const passwordMatch = await compare(loginRequest.password, user.password);
    if (!passwordMatch) {
      throw new BadRequestException(ERROR_CONSTANTS.USER_NOT_FOUND);
    }
    return {
      token: this.jwt.sign({ sub: user.id }),
    };
  }
  async register(user: UserModel): Promise<AuthResponse> {
    const alreadyUseEmail = await this.userPersistencePort.getUserByEmail(
      user.email,
    );

    if (alreadyUseEmail)
      throw new AlreadyExistsException(
        ERROR_CONSTANTS.USER_EMAIL_ALREADY_EXISTS,
      );
    const alreadyUseUsername = await this.userPersistencePort.getUserByEmail(
      user.username,
    );

    if (alreadyUseUsername)
      throw new AlreadyExistsException(
        ERROR_CONSTANTS.USER_NAME_ALREADY_EXISTS,
      );

    user.password = await hash(user.password, 10);

    const result = await this.userPersistencePort.createUser(user);

    return {
      token: this.jwt.sign({ sub: result.id }),
    };
  }
}
