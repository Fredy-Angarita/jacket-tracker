import { ERROR_CONSTANTS } from 'domain/constants/error.constant';
import { AlreadyExistsException } from 'domain/exceptions/already-exists.exception';
import { UserModel } from 'domain/model/user.model';
import { IUserPersistencePort } from 'domain/spi/IUserPersistencePort';
export class UserUseCase {
  constructor(private userPersistencePort: IUserPersistencePort) {}

  async updateUser(id: string, user: Partial<UserModel>): Promise<void> {
    return this.userPersistencePort.updateUser(id, user);
  }

  async getUserByEmail(email: string): Promise<UserModel | null> {
    return this.userPersistencePort.getUserByEmail(email);
  }

  async getUserByID(id: string): Promise<UserModel | null> {
    return this.userPersistencePort.getUserById(id);
  }
}
