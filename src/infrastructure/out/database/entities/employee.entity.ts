import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserEntity } from './user.entity';

@Entity('employee')
export class EmployeeEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ length: 80 })
  name: string;
  @Column({ length: 80 })
  lastName: string;
  @Column()
  phone: string;
  @ManyToOne(() => UserEntity, (user) => user.employees)
  user: UserEntity;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
}
