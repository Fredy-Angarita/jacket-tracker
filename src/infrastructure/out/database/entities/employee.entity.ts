import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserEntity } from './user.entity';
import { AssignmentEntity } from './assignment.entity';

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
  @OneToMany(() => AssignmentEntity, (assignment) => assignment.employee)
  assignments: AssignmentEntity[];
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
}
