import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { IUserPersistencePort } from 'domain/spi/IUserPersistencePort';
import { UserModel } from 'domain/model/user.model';

@Injectable()
export class UserRepository implements IUserPersistencePort {
  constructor(
    @InjectRepository(UserEntity)
    private readonly repository: Repository<UserEntity>,
  ) {}
  async getAllUsers(): Promise<UserModel[]> {
    return await this.repository.find();
  }
  async createUser(user: UserModel): Promise<UserModel> {
    return await this.repository.save(user);
  }
  async updateUser(id: string, user: Partial<UserModel>): Promise<void> {
    await this.repository.update(id, user);
  }
  async getUserById(id: string): Promise<UserModel | null> {
    const user = await this.repository.findOneBy({ id });
    if (!user) {
      return null;
    }
    return user;
  }
  async getUserByUsername(username: string): Promise<UserModel | null> {
    const user = await this.repository.findOneBy({ username });
    if (!user) {
      return null;
    }
    return user;
  }
  async getUserByEmail(email: string): Promise<UserModel | null> {
    const user = await this.repository.findOneBy({ email });
    if (!user) {
      return null;
    }
    return user;
  }
}
