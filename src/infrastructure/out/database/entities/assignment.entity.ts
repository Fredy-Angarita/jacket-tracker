import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { EmployeeEntity } from './employee.entity';
import { ClothesEntity } from './clothes.entity';
import { DeliveryEntity } from './delivery.entity';

@Entity('assignment')
export class AssignmentEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  quantity: number;
  @Column({ type: 'boolean', default: false })
  state: boolean;
  @CreateDateColumn()
  assignedAt: Date;

  @ManyToOne(() => ClothesEntity, (clothes) => clothes.assignments)
  clothes: ClothesEntity;
  @ManyToOne(() => EmployeeEntity, (employee) => employee.assignments)
  employee: EmployeeEntity;
  @OneToMany(() => DeliveryEntity, (delivery) => delivery.assignment)
  deliveries: DeliveryEntity[];
}
