import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { EmployeeEntity } from './employee.entity';

@Entity('_user')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ unique: true, length: 30 })
  username: string;
  @Column({ unique: true })
  email: string;
  @Column()
  password: string;
  @OneToMany(() => EmployeeEntity, (employee) => employee.user)
  employees: EmployeeEntity[];
}
