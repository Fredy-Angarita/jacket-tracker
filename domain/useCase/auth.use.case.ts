import { JwtService } from '@nestjs/jwt';
import { hash } from 'bcrypt';
import { ERROR_CONSTANTS } from 'domain/constants/error.constant';
import { AlreadyExistsException } from 'domain/exceptions/already-exists.exception';
import { AuthResponse } from 'domain/model/response/auth.response';
import { UserModel } from 'domain/model/user.model';
import { IUserPersistencePort } from 'domain/spi/IUserPersistencePort';

export class AuthUseCase {
  constructor(
    private readonly userPersistencePort: IUserPersistencePort,
    private readonly jwt: JwtService,
  ) {}
  async login() {}
  async register(user: UserModel): Promise<AuthResponse> {
    const alreadyUseEmail = await this.userPersistencePort.getUserByEmail(
      user.email,
    );
    const alreadyUseUsername = await this.userPersistencePort.getUserByEmail(
      user.username,
    );
    if (alreadyUseEmail || alreadyUseUsername) {
      throw new AlreadyExistsException(ERROR_CONSTANTS.USER_ALREADY_EXISTS);
    }
    user.password = await hash(user.password, 10);

    const result = await this.userPersistencePort.createUser(user);

    return {
      token: this.jwt.sign({ id: result.id, email: result.email }),
    };
  }
}
