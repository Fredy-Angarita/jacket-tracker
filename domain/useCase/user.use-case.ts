import { ERROR_CONSTANTS } from 'domain/constants/error.constant';
import { AlreadyExistsException } from 'domain/exceptions/already-exists.exception';
import { UserModel } from 'domain/model/user.model';
import { IUserPersistencePort } from 'domain/spi/IUserPersistencePort';
export class UserUseCase {
  constructor(private userPersistencePort: IUserPersistencePort) {}

  async createUser(user: UserModel): Promise<UserModel> {
    const alreadyUseEmail = await this.userPersistencePort.getUserByEmail(
      user.email,
    );
    const alreadyUseUsername = await this.userPersistencePort.getUserByEmail(
      user.username,
    );

    if (alreadyUseEmail || alreadyUseUsername) {
      throw new AlreadyExistsException(ERROR_CONSTANTS.USER_ALREADY_EXISTS);
    }
    return this.userPersistencePort.createUser(user);
  }

  async updateUser(id: string, user: Partial<UserModel>): Promise<void> {
    return this.userPersistencePort.updateUser(id, user);
  }
}
