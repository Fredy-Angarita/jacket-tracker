import { UserModel } from 'domain/model/user.model';
import { IUserPersistencePort } from 'domain/spi/IUserPersistencePort';
export class UserUseCase {
  constructor(private userPersistencePort: IUserPersistencePort) {}

  async createUser(user: UserModel): Promise<UserModel> {
    return this.userPersistencePort.createUser(user);
  }

  async getAllUsers(): Promise<UserModel[]> {
    return this.userPersistencePort.getAllUsers();
  }

  async getUserById(id: string): Promise<UserModel | null> {
    return this.userPersistencePort.getUserById(id);
  }

  async updateUser(id: string, user: Partial<UserModel>): Promise<void> {
    return this.userPersistencePort.updateUser(id, user);
  }
}
