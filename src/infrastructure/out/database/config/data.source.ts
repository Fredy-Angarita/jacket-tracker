import { DataSourceOptions } from 'typeorm';
import dotenv from 'dotenv';
import { UserEntity } from '../entities/user.entity';
import path from 'path';
import { DataSource } from 'typeorm';
import { EmployeeEntity } from '../entities/employee.entity';
import { ClotheSizeEntity } from '../entities/clothe.size.entity';
import { ClothesEntity } from '../entities/clothes.entity';
import { AssignmentEntity } from '../entities/assignment.entity';
import { DeliveryEntity } from '../entities/delivery.entity';
dotenv.config();

export const DataSourceConfig: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT!, 10),
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  synchronize: false,
  logging: false,
  entities: [
    UserEntity,
    EmployeeEntity,
    ClotheSizeEntity,
    ClothesEntity,
    AssignmentEntity,
    DeliveryEntity,
  ],
  migrations: [path.join(__dirname, '../migrations/*.{js,ts}')],
};

export const dataSourceInstance = new DataSource(DataSourceConfig);
