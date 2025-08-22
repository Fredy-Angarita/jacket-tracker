import { UserModel } from 'domain/model/user.model';

export interface IUserPersistencePort {
  createUser(user: UserModel): Promise<UserModel>;
  getAllUsers(): Promise<UserModel[]>;
  getUserById(id: string): Promise<UserModel | null>;
  getUserByUsername(username: string): Promise<UserModel | null>;
  getUserByEmail(email: string): Promise<UserModel | null>;
  updateUser(id: string, user: Partial<UserModel>): Promise<void>;
}
